import { useEffect, useState } from "react";
import "./buttons.css";

export const Buttons = ({ name , image, pressed, setPressed }) => {
  const [isActive, setIsActive] = useState(true);



  const handleIsActive = () => {
    
    if(!isActive){
      setIsActive(true);
      setPressed(name);
    } else{
      setIsActive(false);
      setPressed(null);
    }
    
  };

  useEffect(() => {
    name === pressed ? setIsActive(true) : setIsActive(false);
  
  }, [name , pressed])
  



  const onActive = {
    filter: "invert(60%) sepia(63%) saturate(448%) hue-rotate(139deg) brightness(91%) contrast(97%)"
  };

  const offActive = {
    filter: "invert(90%) sepia(16%) saturate(0%) hue-rotate(278deg) brightness(87%) contrast(93%)"
  };


  

  return (
    <button className="buttonNavBar" onClick={handleIsActive}>
      
        <img src={image} style={isActive ? onActive : offActive} alt="" />
      
    </button>
  );
};



//navlink