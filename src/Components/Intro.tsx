import banner from "../assets/1.jpg";

const datos = [
  "atencion telefonica: +5492234373416",
  "Somos un estudio juridico con amplia experiencia en la ciudad de Mar del Plata, en el cual nuestros clientes encontraran celeridad y confianza. El objetivo central es la satisfaccion del cliente brindando la mejor solucion posible al caso concreto",
];

export const Intro = () => {
  return (
    <div className=" mb-10">
      <div className="  flex flex-col w-1/2 mx-auto md:flex-col md:justify-center lg:flex-row">
        <button className="hidden mx-10 lg:flex p-8 rounded-lg bg-gradient-to-r from-finish-blue to-starting-blue ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-phone "
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
          </svg>
          <p className=" text-black text-lg sm:text-white">
            {datos.slice(0, 1)}
          </p>
        </button>
        <button className=" hidden lg:flex p-8 rounded-lg bg-gradient-to-r from-finish-blue to-starting-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail mr-8"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
          <p className="text-black text-lg sm:text-white">
            estudiosoriasanmartin@gmail.com
          </p>
        </button>
      </div>

      <div className=" flex flex-col mr-32 md:flex-col lg:flex-row mb-8 p-12 mt-24">
        <img
          src={banner}
          alt="banner"
          className=" w-[100%] rounded-xl mx-auto md:m-auto lg:h-1/2 lg:w-1/2 lg:mr-16"
        />
        <div>
          <h1 className=" text-2xl md:text-5xl md:ml-0 mt-32">
            {" "}
            Quienes somos
          </h1>

          <p className=" text-xl text-center mb-32 w-full p-1 md:w-full md:ml-0 md:text-2xl lg:h-1/2 ">
            {datos.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};
