import FactoryIcon from "@mui/icons-material/Factory";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BalanceIcon from "@mui/icons-material/Balance";
import ReactWhatsapp from "react-whatsapp";
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Materias() {
  return (
    <motion.div
      animate={{ x: 7 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className="flex flex-col lg:flex-row lg:justify-evenly">
        <h2>Poseemos amplia experiencia en diversas ramas del derecho como:</h2>
        <div className="mb-24 ">
          <FactoryIcon color="secondary" sx={{ fontSize: 70 }} />
          <ul>
            <button className="  text-white text-lg bg-gradient-to-r from-finish-blue to-starting-blue rounded-lg p-2">
              Derecho laboral
            </button>
            <li>Despidos</li>
            <li>Indemnizaciones</li>
            <li>Telegramas laborales</li>
          </ul>
        </div>
        <div className="mb-24">
          <FamilyRestroomIcon sx={{ fontSize: 70 }} />

          <ul>
            <button className="  text-white text-lg bg-gradient-to-r from-finish-blue to-starting-blue rounded-lg p-2">
              Derecho de familia
            </button>
            <li>Divorcios</li>
            <li>Alimentos</li>
            <li>Cuidado personal</li>
          </ul>
        </div>
        <div className=" mb-32">
          <BalanceIcon sx={{ fontSize: 70 }} />

          <ul>
            <button className="  text-white text-lg bg-gradient-to-r from-finish-blue to-starting-blue rounded-lg p-2">
              Derecho civil
            </button>
            <li>Daños y perjuicios</li>
            <li>Incumplimientos contractuales</li>
            <li>Sucesiones</li>
          </ul>
        </div>
        <h3 className=" ml-1 mb-10 lg:hidden">Consultenos</h3>
        <div className=" mr-1 sm:mr-1 lg:hidden -mb-96">
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
    </motion.div>
  );
}
