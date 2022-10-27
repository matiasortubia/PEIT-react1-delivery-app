import React from 'react';
import {useState} from 'react';
import styles from './address.module.css';


const Address = (props) => {
    const [address, setAddress] = useState(props.savedAddress);
    const [deliveryTime, setDeliveryTime] = useState(props.defaultTime);
    
    const editAddress = () => {
        console.log("Edit address");
    };

    const editTime = () => {
        console.log("Edit time");
    };

    return (
        <div>
            <ul className={styles.addressBox}>
                <li>{"624 Maple Ave"}</li>
                <li><button onClick={editAddress}>Edit address</button></li>
                <li>{"30 min"}</li>
                <li><button onClick={editTime}>Choose time</button></li>
            </ul>
        </div>
    );
};

export { Address };