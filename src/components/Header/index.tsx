import Logo from "../../../public/styllar-logo.svg";
import MenuButton from "../../../public/menu-button.svg";

export function Header() {
  return (
    <header className="h-50px flex place-content-between px-5 bg-pink">
      <img src={Logo} alt="" />
      <img src={MenuButton} alt="" />
    </header>
  );
}
