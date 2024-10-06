
import { useContext } from "react";
import Logo from "../assets/title-header.svg"
import "../styles/Header.css";

export default function Header() {


  return (
    <header>
      <div className="cohort-logo">
        <img className="cohort-svg" src={Logo} alt="cohort-logo" />
      </div>
      <div className="userAvatar">
        {/* Todo: add user avatar */}
      </div>

    </header>
  );
}