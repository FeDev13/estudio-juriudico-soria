import { Divider, Center } from "@chakra-ui/react";
import { Familia } from "./Familia";
import { Civil } from "./Civil";
import { Banner } from "./Banner";
import { Consumidor } from "./Consumidor";
import { Intro } from "./Intro";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <motion.div
        animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Banner />
        <Intro />
        <Center
          height="200px"
          className=" flex flex-col  items-center h-14 lg:flex-row"
        >
          {" "}
          <h2 className=" mr-32 text-2xl mt-96 md:uppercase md:text-3xl mb-10  lg:mt-10">
            Areas de practica
          </h2>
          <Familia />
          <Divider
            orientation="vertical"
            className=" w-0.5 bg-slate-400 rounded-full"
          />
          <Civil />
          <Divider
            orientation="vertical"
            className=" w-0.5 bg-slate-400 rounded-full"
          />
          <Consumidor />
        </Center>
      </motion.div>
    </>
  );
};
