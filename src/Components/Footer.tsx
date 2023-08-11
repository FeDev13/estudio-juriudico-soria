import Logo from "../assets/Black Brown Modern Law Firm Logo.png";

export default function LargeWithLogoLeft() {
  return (
    <footer
      id="dark-theme"
      className="mt-[120%] flex flex-col w-full gap-8 px-8 py-16 md:gap-12 lg:mt-4"
    >
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="flex flex-col gap-2">
          <img src={Logo} alt="logo estudio" className="w-1/2" />
        </div>
        <div className="flex flex-col gap-4 xsm:flex-row md:p-0">
          <p>Av. Independencia</p>
          <p>+5492234373416</p>
          <p>estudiosoriasanmartin@gmail.com</p>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between ">
        <div>&#169; 2023</div>
      </div>
    </footer>
  );
}
