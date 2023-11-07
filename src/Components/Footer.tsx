import Logo from "../assets/Black Brown Modern Law Firm Logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

export default function LargeWithLogoLeft() {
  return (
    <footer
      id="dark-theme"
      className="mt-[120%] flex flex-col w-full gap-8 px-8 py-16 md:gap-12 lg:mt-4 bg-white"
    >
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row bg-white">
        <div className="flex flex-col gap-2 bg-white mx-auto">
          <img src={Logo} alt="logo estudio" className="w-[70%]" />
        </div>
        <div className="flex flex-col gap-4 md:p-0 bg-white">
          <p className=" bg-transparent">
            <LocationOnIcon className=" bg-transparent" />
            Av. Independencia
          </p>
          <p className=" bg-transparent">
            {" "}
            <PhoneAndroidIcon className=" bg-transparent" /> +5492234373416
          </p>
          <p className=" bg-transparent">
            {" "}
            <EmailIcon className=" bg-transparent" />{" "}
            estudiosoriasanmartin@gmail.com
          </p>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between bg-white">
        <div className=" bg-white">
          &#169;Estudio Juridico Soria San Martin. 2023
        </div>
      </div>
    </footer>
  );
}
