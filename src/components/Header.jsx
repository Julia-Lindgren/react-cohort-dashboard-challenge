
import { useContext } from "react";
import Logo from  "../assets/title-header.svg"

export default function Header() {
  

    return (
      <header>
        <div className="cohort-logo">
          <img className="cohort-svg" src={Logo} alt="cohort-logo" />
        </div>
        <div>
            
        </div>
        
      </header>
    );
}