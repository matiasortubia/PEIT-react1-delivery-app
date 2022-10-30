import { useRef, useEffect } from "react";
import "./modalcart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { OutsideAlerter } from "./OutsideAlerter.jsx";
import { Address } from '../address/Address'

function ModalCart({ isOpenModal, setIsOpenModal, firstRef, openEditAddress }) {

  const closeButton = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        className={`Overlay ${isOpenModal ? "Show" : ""}`}
        onClick={() => setIsOpenModal(!isOpenModal)}>

      </div>
      <div className={`modalBackground ${isOpenModal ? "Open" : ""}`}>
        <OutsideAlerter ref={firstRef} setIsOpenModal={setIsOpenModal}>
          <FontAwesomeIcon
            icon={faXmark}
            className="closeButton"
            onClick={closeButton}
          />

          <div className="modalTitle">
            <h1>Your Order</h1>
          </div>

          <div className="modalBody">
            <Address openEditAddress={openEditAddress} />
            {/*
                <Products />
                <DeliveryFee />*/}
          </div>
          <div className="modalFooter">
            {/*  <Total />
                <PlaceOrder />*/}
          </div>
        </OutsideAlerter>
      </div>
    </>
  );
}

export default ModalCart;
