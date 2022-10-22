import { Buttons } from "../buttons/Buttons";
import './navbar.css';
import home from '../../assets/navButtons/home.png'
import favs from '../../assets/navButtons/favs.svg'
import profile from '../../assets/navButtons/prof.svg'
import notifications from '../../assets/navButtons/noti.svg'
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [pressed, setPressed] = useState("Home");

  return (

    <div className="navBar">
      <Link to="/"> 
        <Buttons name="Home" image={home} pressed={pressed} setPressed={setPressed} />
      </Link>
      <Buttons name="Profile" image={profile} pressed={pressed} setPressed={setPressed} />
      <Buttons name="Favs" image={favs} pressed={pressed} setPressed={setPressed} />
      <Buttons name="Notifications" image={notifications} pressed={pressed} setPressed={setPressed} />
    </div>

  );
};
