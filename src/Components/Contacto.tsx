import React, { useState } from "react";
import { app } from "../credentials";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "../Hooks/useForm";

const db = getFirestore(app);

export default function ContactForm() {
  const [lista, setLista] = useState<unknown[]>([]);

  const [input, handleInputChangen, setInput] = useForm({
    nombre: "", //variables de estado
    email: "",
    consulta: "",
  });

  const notify = () => {
    if (input.nombre === "" || input.email === "" || input.consulta === "") {
      toast.error("Debe completar todos los campos del formulario");
    } else {
      toast.success("su consulta fue enviada");
    }
  };

  const addConsulta = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLista([...lista, input]);
    try {
      await addDoc(collection(db, "consultas"), {
        ...lista,
      });
    } catch (error) {
      console.log(error);
    }
    setInput({ nombre: "", email: "", consulta: "" }); //limpia los inputs
    notify;
  };
  return (
    <>
      <h2 className=" text-4xl mb-12">
        Complete el formulario y nos contactaremos a la brevedad
      </h2>
      <ul className="p-4 w-96 h-full text-base-content bg-white text-base mx-auto rounded-xl -mb-64">
        <form
          className=" flex flex-col justify-between bg-white"
          action="POST"
          onSubmit={(e: never) => addConsulta(e)}
        >
          <label className=" mb-4 font-bold bg-transparent" htmlFor="name">
            Nombre completo
          </label>
          <input
            className=" mb-4 rounded-md outline-none"
            type="text"
            name="nombre"
            id="name"
            onChange={handleInputChangen}
            value={input.nombre}
            placeholder="Nombre y apellido"
            autoFocus
            required
          />
          <label className=" mb-4 font-bold bg-transparent" htmlFor="">
            Email
          </label>
          <input
            className=" mb-4 rounded-md outline-none"
            type="email"
            name="email"
            id="email"
            onChange={handleInputChangen}
            value={input.email}
            placeholder="correo electronico"
            autoFocus
            required
          />
          <label className=" mb-4 font-bold bg-transparent " htmlFor="consulta">
            Escriba su consulta
          </label>
          <textarea
            className=" rounded-md outline-none text-black"
            name="consulta"
            id=""
            cols={20}
            rows={7}
            placeholder="Maximo 120 caracteres"
            maxLength={120}
            onChange={handleInputChangen}
            value={input.consulta}
            required
          ></textarea>
          <button
            type="submit"
            className=" text-center mx-auto mt-3 w-[40%] rounded-md bg-blue-700 text-white font-bold"
            onClick={() => {
              notify();
            }}
          >
            Enviar
          </button>
          <ToastContainer />
        </form>
      </ul>
    </>
  );
}
