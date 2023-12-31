import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import ReactWhatsapp from "react-whatsapp";
import { Link } from "react-router-dom";
import Logo from "../assets/Black Brown Modern Law Firm Logo.png";
import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-white">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal bg-white"
      >
        <Link to="/quiensoy"> Acerca de mi </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal mr-10 bg-white"
      >
        <Link to="/materias"> Materias </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal mr-8 bg-white"
      >
        <Link to="/contacto"> Contacto</Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 lg:items-center border-none bg-white mb-10">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 bg-white">
        <Typography as="a" className="mr-4 cursor-pointer py-1.5 font-medium">
          <Link to="/">
            <img src={Logo} alt="logo soria" className=" w-[50%]" />
          </Link>
        </Typography>
        <div className="hidden lg:block lg:items-center mb-16 bg-white">
          {navList}
        </div>
        <div className="hidden lg:inline-block mb-16 bg-white">
          {/*  variant="gradient"
          size="sm"
           */}

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
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mb-24 bg-white"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 bg-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container flex justify-start bg-white">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
