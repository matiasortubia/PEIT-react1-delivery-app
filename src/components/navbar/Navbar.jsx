import { Buttons } from "../buttons/Buttons";
import './navbar.css';
import home from '../../assets/navButtons/home.png'
import favs from '../../assets/navButtons/favs.svg'
import profile from '../../assets/navButtons/prof.svg'
import notifications from '../../assets/navButtons/noti.svg'

export const Navbar = () => {
  return (
    
      <div className="navBar">
        <Buttons  name="Home" href={"#home"} image={home} ac/>
        <Buttons  name="Profile" href={"#profile"} image={profile} />
        <Buttons  name="Favs" href={"#favs"} image={favs} />
        <Buttons  name="Notifications" href={"#notifications"} image={notifications} />
      </div>
    
  );
};
