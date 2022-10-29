import React from 'react';
import { useState } from 'react';
import styles from './address.module.css';
import { AddressModal } from '../addressModal/AddressModal.jsx';

const Address = (props) => {
    const [address, setAddress] = useState(props.defaultAddress);
    const [deliveryTime, setDeliveryTime] = useState("13:30");
    const [editAddress, setEditAddress] = useState(false);

    const openEditAddress = () => {
        console.log("Edit address");
        setEditAddress(true);
    };

    const closeEditAddress = () => {
        console.log("Close edit");
        setEditAddress(false);
    };

    const handleEditTime = () => {
        console.log("Edit time");
    };

    const handleInfoSubmit = (e) => {
        e.preventDefault();
        setEditAddress(false);
        console.log("Delivery info saved.");
        console.log(address);
    }

    return (
        editAddress ?

        <AddressModal closeModal={ openEditAddress } 
                      handleInfoSubmit={ handleInfoSubmit } 
                      onCancel={ closeEditAddress }/> :

        <div>
            <ul className={styles.addressBox}>
                <li>{"Your address"}</li>
                <li><button onClick={openEditAddress}>Edit address</button></li>
                <li>{"Estimated time"}</li>
                <li><button onClick={handleEditTime}>Choose time</button></li>
            </ul>
        </div>
    );
};

export { Address };
/*
    return (
        <>
            {
                editAddress ?
                
                (<AddressForm handleInfoSubmit={ handleInfoSubmit }/>) :

                (
                    <div>
                        <ul className={styles.addressBox}>
                            <li>{"Your address"}</li>
                            <li><button onClick={handleEditAddress}>Edit address</button></li>
                            <li>{"Estimated time"}</li>
                            <li><button onClick={handleEditTime}>Choose time</button></li>
                        </ul>
                    </div>
                )
            }
        </>
    );
    */
    /*
    return (
        <div>
            <ul className={styles.addressBox}>
                <li>{"Your address"}</li>
                <li><button onClick={handleEditAddress}>Edit address</button></li>
                <li>{"Estimated time"}</li>
                <li><button onClick={handleEditTime}>Choose time</button></li>
            </ul>
            {editAddress === true && <AddressForm />}
        </div>
    );*/

    /* 
    <div>
                    <ul className={styles.addressBox}>
                        <li><input inputtype="text" value={address} onChange={(e) => setAddress(e.target.value)} id="addressInput" /></li>
                        <li><label htmlFor="addressInput">Edit address</label></li>
                        <li><input type="time" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} min="01:00" max="09:00"  id="timeInput" /></li>
                        <li><label htmlFor="timeInput">Choose time</label></li>
                    </ul>
                </div>
    */