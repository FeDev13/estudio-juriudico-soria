import banner from "../assets/banner.jpg";
import ReactWhatsapp from "react-whatsapp";
import { Center } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <div className=" flex flex-col mx-auto md:flex">
      <div className=" w-[70%] ml-0 md:w-full">
        <img
          src={banner}
          alt="banner"
          className=" w-full md:w-[60%] sm:ml-10 md:ml-28 lg:mx-auto mb-28 rounded-xl"
        />
      </div>

      <h3 className=" mr-32 lg:hidden">Consultenos</h3>
      <div className=" mr-32 sm:mr-32 lg:hidden">
        {/* variant="gradient"
        size="sm"  */}

        <Center
          w="50px"
          h="50px"
          bg="#25D366"
          color="white"
          mx="auto"
          borderRadius={"3xl"}
        >
          <ReactWhatsapp number="+5492234373416" element="button" message="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-whatsapp bg-transparent"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
            </svg>
          </ReactWhatsapp>
        </Center>
      </div>
    </div>
  );
};
