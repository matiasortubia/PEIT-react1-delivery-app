import { Buttons } from "../buttons/Buttons";
import './navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser , faBookmark , faBell } from '@fortawesome/free-regular-svg-icons'




export const Navbar = () => {

  const [pressed, setPressed] = useState("home");

  return (

    <div className="navBar">
      <Link className="Link" to="/"> 
        <Buttons name="home" icon={faHome} pressed={pressed} setPressed={setPressed}/>
      </Link>
      <Buttons name="profile" icon={faUser}  pressed={pressed} setPressed={setPressed} />
      <Buttons name="favs" icon={faBookmark} pressed={pressed} setPressed={setPressed} />
      <Buttons name="notifications" icon={faBell}  pressed={pressed} setPressed={setPressed} />
    </div>

  );
};
