import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './addressModal.module.css';;
import { AddressForm } from '../addressForm/AddressForm.jsx'

const AddressModal = ({closeEditAddress, handleInfoSubmit}) => {
    return (
            <div className={ styles.addressModalContainer }>
                
                <FontAwesomeIcon icon={faXmark} className='closeButton' onClick={ closeEditAddress } />
                
                <div className='modalTitle'>
                    <h1>Change address</h1>
                </div>

                <AddressForm handleInfoSubmit={ handleInfoSubmit }/>
            </div>      
    );
}

export { AddressModal };