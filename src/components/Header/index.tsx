import Logo from "../../../public/styllar-logo.svg";
import MenuButton from "../../../public/menu-button.svg";
import BtDelete from "../../../public/bt-delete.svg";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(false)
  function ChangeMenu() {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <header className="h-50px flex place-content-between px-5 bg-pink md:px-8">
      <img src={Logo} alt="" className="hover:cursor-pointer" />
      <img
        src={MenuButton}
        alt=""
        className="hover:cursor-pointer"
        onClick={ChangeMenu}
      />
      <div
        className={
          !menu
            ? "hidden"
            : "absolute right-0 w-300px h-400px bg-red flex flex-col justify-center p-7 rounded-bl-3xl"
        }
      >
        <div className="w-full flex justify-end">
          <img
            src={BtDelete}
            alt=""
            className="w-7 hover:cursor-pointer"
            onClick={ChangeMenu}
          />
        </div>
        <div className="h-full text-white flex flex-col justify-center items-center gap-8">
          <a href="#" className="font-bold text-1.5rem">
            Quarto
          </a>
          <a href="#" className="font-bold text-1.5rem">
            Sala
          </a>
          <a href="#" className="font-bold text-1.5rem">
            Cozinha
          </a>
        </div>
      </div>
    </header>
  );
}
