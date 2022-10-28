import { useEffect, useRef } from 'react'

  /*
    Hook that alerts clicks outside of the passed ref
   */


const useOutsideAlerter = (firstRef,closeModal) => {

    const handleClickOutside = (e) => {
        if (firstRef.current && !firstRef.current.contains(e.target)) {
         closeModal(false);
        } 
      };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return ()=>{
        document.addEventListener("mousedown", handleClickOutside);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[firstRef]);
  };

export const OutsideAlerter = (props) => {

    const {closeModal} = props;
    const firstRef = useRef(null);
    useOutsideAlerter(firstRef, closeModal);

    
  return (
    <div className="modalContainer" ref={firstRef} closeModal={closeModal} >
        {props.children}
    </div>
  )
}

