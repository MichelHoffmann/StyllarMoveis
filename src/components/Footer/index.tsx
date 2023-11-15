import Logo from "../../../public/styllar-logo-name.svg";
import Whats from "../../../public/whats-icon.svg";
import Maps from "../../../public/maps.svg";
import Insta from "../../../public/insta-icon.svg";
import Face from "../../../public/face-icon.svg";

export function Footer() {
  return (
    <>
      <footer className="bg-pink py-6 lg:flex lg:justify-center">
        <div className="flex flex-col gap-3 justify-center items-center">
          <img src={Logo} alt="" />
          <button className="w-260px h-10 mt-5 mb-2.5 flex justify-center items-center gap-1 bg-red text-white text-base font-light rounded-2xl">
            <img src={Whats} alt="" className="" />
            SOLICITE SEU ORÇAMENTO
          </button>
        </div>
        <div className="pl-5 mt-5 mb-5 md:pl-20 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <p className="flex gap-2.5 justify-center items-center md:justify-start mb-3">
            <img src={Maps} alt="" />
            R. Joaquim Macedo,711 - São Francisco
          </p>
          <h3 className="text-red text-base mb-3">Redes Sociais</h3>
          <div className="md:flex gap-4 items-center">
            <p className="flex gap-1 items-center mb-2 md:mb-0 lg:mb-0">
              <img src={Insta} alt="" />
              @styllarmoveis
            </p>
            <p className="flex gap-1 items-center">
              <img src={Face} alt="" />
              Styllar Móveis Planejados III
            </p>
          </div>
        </div>
      </footer>
      <div className="h-12 bg-gray flex items-center justify-center">
        <p className="text-white">Desenvolvido com ❤ por Michel Hoffmann</p>
      </div>
    </>
  );
}
