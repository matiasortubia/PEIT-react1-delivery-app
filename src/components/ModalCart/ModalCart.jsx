import React from 'react'
import './modalcart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Address } from '../address/Address'

function ModalCart({closeModal, openEditAddress}) {

    const closeButton = () =>{
        closeModal(false);
    }

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            
            <FontAwesomeIcon icon={faXmark} className='closeButton' onClick={closeButton} />
            
            <div className='modalTitle'>
                <h1>Your Order</h1>
            </div>
            
            
            <div className='modalBody'>
                <Address openEditAddress={openEditAddress} />
            {/* <Products />
                <DeliveryFee />*/}  
            </div>
            <div className='modalFooter'>
           {/*  <Total />
                <PlaceOrder />*/}  

            </div>

        </div>

            
        
    </div>
  )
}

export default ModalCart