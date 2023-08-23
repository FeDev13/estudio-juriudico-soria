import { Center } from "@chakra-ui/react";

export const Familia = () => {
  return (
    <>
      <div className=" mr-32 w-full">
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
            className="icon icon-tabler icon-tabler-users-group mx-auto bg-transparent"
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
            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
          </svg>
        </Center>

        <h3 className=" text-2xl underline my-5">Derecho de familia</h3>
        <ul className="mb-10 underline">
          <li>Divorcios</li>
          <li>Alimentos</li>
          <li>Cuidado personal</li>
        </ul>
      </div>
    </>
  );
};
