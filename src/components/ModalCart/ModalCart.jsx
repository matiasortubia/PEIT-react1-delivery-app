import { useRef , useEffect } from "react";
import "./modalcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { OutsideAlerter } from "./OutsideAlerter.jsx";




function ModalCart({ closeModal,firstRef }) {

  const closeButton = () => {
    closeModal(false);
  };


  return (
    <div className="modalBackground">
      <OutsideAlerter ref={firstRef} closeModal={closeModal}>
        <FontAwesomeIcon
          icon={faXmark}
          className="closeButton"
          onClick={closeButton}
        />

        <div className="modalTitle">
          <h1>Your Order</h1>
        </div>

        <div className="modalBody">
          {/* <Adress />
                <Products />
                <DeliveryFee />*/}
        </div>
        <div className="modalFooter">
          {/*  <Total />
                <PlaceOrder />*/}
        </div>
      </OutsideAlerter>
    </div>
  );
}

export default ModalCart;
