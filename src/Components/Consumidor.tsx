import { Center } from "@chakra-ui/react";
const laboral = [
  {
    title: "Derecho laboral",
    items: ["Despidos", "Accidentes laborales", "Redaccion de telegramas"],
  },
];

export const Consumidor = () => {
  return (
    <div className=" mr-32 w-1/5">
      <Center
        w="80px"
        h="80px"
        bg="#00394d"
        color="white"
        mx="auto"
        borderRadius={"xl"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-building-factory-2"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 21h18"></path>
          <path d="M5 21v-12l5 4v-4l5 4h4"></path>
          <path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582"></path>
          <path d="M9 17h1"></path>
          <path d="M14 17h1"></path>
        </svg>
      </Center>
      <h3 className=" my-5">
        {laboral.map(({ title, items }) => (
          <ul key={title} className=" text-xl underline">
            {title}
            {items.map((item) => (
              <li key={item} className=" text-base no-underline">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </h3>
    </div>
  );
};
