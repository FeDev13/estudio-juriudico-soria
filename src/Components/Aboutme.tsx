import profilePic from "../assets/42a72dba-e0c5-4fbb-a1bc-e55f1ffee4b9.jpg";

const informacion = [
  {
    title:
      "Soy egresado de la Universidad Nacional de Mar del Plata, en la cual obtuve mi titulo de grado. Actualmente ademas de desempeñarme como abogado particular, formo parte del consultorio juridico gratuito del Colegio de Abogados de Mar del Plata. Durante mi formacion como profesional, ademas, he realizado diversas capacitaciones entre las cuales se encuentran:",
    items: [
      "Practicas Comerciales y Defensa del Consumidor, año 2022 Derecho del Consumidor, Parte General, año 2021.",
      "Introducción a la Inteligencia Artificial y su Impacto sobre el Derecho, año 2021 ",
      "Seguros y Código Civil Y Comercial, dictado por el Dr. Waldo Sobrino, Buenos Aires, año 2022",
      "SUCESORIA DESDE EL ESTUDIO DEL ABOGADO HASTA LA LIQUIDACIÓN DEL ACERVO SUCESORIO-CUESTIONES PRÁCTICAS",
      "El ejercicio profesional en el abordaje de la violencia de género",
    ],
  },
];

export function About() {
  return (
    <>
      <h2 className=" text-4xl mb-12">Quien soy</h2>
      <div className=" flex flex-col px-10 lg:flex-row">
        <img
          src={profilePic}
          alt="imagen de perfil"
          className=" rounded-full mr-8  sm:mx-auto sm:rounded-md sm:w-[60%] lg:h-1/2 lg:w-[30%]"
        />
        {informacion.map(({ title, items }) => (
          <p className=" w-1/2 mx-auto my-16 text-lg text-justify sm:mx-auto -mb-96">
            {title}
            {items.map((item) => (
              <li className=" text-left mt-5">{item}</li>
            ))}
          </p>
        ))}
      </div>
    </>
  );
}
