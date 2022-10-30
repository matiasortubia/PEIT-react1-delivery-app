import React from 'react'
import './modalcart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { CartProducts } from './CartProducts';

function ModalCart({ closeModal }) {

    const closeButton = () => {
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
                    {/* <Adress />
                <Products />
                <DeliveryFee />*/}
                    <CartProducts />
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