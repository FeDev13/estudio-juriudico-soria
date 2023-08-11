import React, { useState } from "react";
import useForm from "../Hooks/useForm";

export default function ContactForm() {
  /* const [lista, setLista] = useState<unknown[]>([]);

    const [input, handleInputChangen, setInput] = useForm({
      nombre: "", //variables de estado
      email: "",
      consulta: "",
    }); */

  /* const notify = () => {
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
    }; */
  return (
    <>
      <h2 className=" text-4xl mb-12">
        Complete el formulario y nos contactaremos a la brevedad
      </h2>
      <ul className="p-4 w-96 h-full text-base-content bg-slate-200 text-base mx-auto rounded-xl">
        <form
          className=" flex flex-col justify-between"
          action="POST"
          /* onSubmit={(e: any) => addConsulta(e)} */
        >
          <label className=" mb-4 font-bold" htmlFor="name">
            Nombre completo
          </label>
          <input
            className=" mb-4 rounded-md outline-none"
            type="text"
            name="nombre"
            id="name"
            /* onChange={handleInputChangen}
              value={input.nombre} */
            placeholder="Nombre y apellido"
            autoFocus
            required
          />
          <label className=" mb-4 font-bold" htmlFor="">
            Email
          </label>
          <input
            className=" mb-4 rounded-md outline-none"
            type="email"
            name="email"
            id="email"
            /*  onChange={handleInputChangen}
              value={input.email} */
            placeholder="correo electronico"
            autoFocus
            required
          />
          <label className=" mb-4 font-bold " htmlFor="consulta">
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
            /* onChange={handleInputChangen}
              value={input.consulta} */
            required
          ></textarea>
          <button
            type="submit"
            className=" text-center m-8 w-[70%] rounded-md bg-blue-700 text-white font-bold"
            onClick={() => {
              /* notify(); */
            }}
          >
            Enviar
          </button>
        </form>
      </ul>
    </>
  );
}
