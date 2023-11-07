import { Center } from "@chakra-ui/react";

const materias = [
  {
    title: "Derecho civil",
    items: [
      "Daños y perjuicios",
      "Incumplimientos contractuales",
      "Sucesiones",
    ],
  },
];

export const Civil = () => {
  return (
    <>
      <div className="  w-full">
        <Center
          w="80px"
          h="80px"
          bgGradient="linear(to-l, #032761,#2e8194 )"
          color="white"
          mx="auto"
          borderRadius={"xl"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-scale mx-auto bg-transparent"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 20l10 0"></path>
            <path d="M6 6l6 -1l6 1"></path>
            <path d="M12 3l0 17"></path>
            <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
            <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
          </svg>
        </Center>

        {materias.map(({ title, items }) => (
          <ul key={title} className=" text-2xl mb-5 mt-4 underline">
            {title}
            {items.map((item) => (
              <li key={item} className=" text-base no-underline mt-5">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};
