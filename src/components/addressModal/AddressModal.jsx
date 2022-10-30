import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './addressModal.module.css';
import '../ModalCart/modalcart.css';
import { AddressForm } from '../addressForm/AddressForm.jsx'

const AddressModal = ({closeModal, handleInfoSubmit}) => {
    return (
        <div className={styles.addressModalBackground}>
            <div className='modalContainer'>
                
                <FontAwesomeIcon icon={faXmark} className='closeButton' onClick={ closeModal } />
                
                <div className='modalTitle'>
                    <h1>Change address</h1>
                </div>

                <AddressForm handleInfoSubmit={ handleInfoSubmit }/>
            </div>      
        </div>
    );
}

export { AddressModal };