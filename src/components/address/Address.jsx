import React from 'react';
import { useState } from 'react';
import styles from './address.module.css';
import clockIcon from '../../assets/clock-regular.svg';

import { useRef } from 'react';



const Address = (props) => {
    const [deliveryTime, setDeliveryTime] = useState("13:30");
    const [editTimeOn, setEditTimeOn] = useState(false);
    const [previousTime, setPreviousTime] = useState("");

    const ref = useRef(null);

    const handleTimeSubmit = e => {
        e.preventDefault();
        setEditTimeOn(false);
    }

    const handleInputChange = e => {
        setPreviousTime(deliveryTime);
        setDeliveryTime(e.target.value);
    };

    const handleTimeEditCancel = () => {
        setDeliveryTime(previousTime);
        setEditTimeOn(false);
    }

    return (
        <div>
            <ul className={styles.addressBox}>
                <li>{props.userInfo}</li>
                <li><button onClick={props.openEditAddress}>Edit Address</button></li>
                <li>
                    { editTimeOn ? 
                    
                    <div className={styles.timeInputContainer}>
                        <input className={styles.timeInput}
                            type="time" 
                            value={deliveryTime}
                            name="deliveryTime" 
                            min="09:00:00"
                            max="01:00:00" 
                            step="900"
                            onChange={handleInputChange}
                            ref={ref} 
                    required />
                    
                        <button type="submit" 
                                onClick={handleTimeSubmit} 
                                className={styles.timeSubmit}>O</button>
                        <button type="button"
                                onClick={handleTimeEditCancel}>
                            X
                        </button>
                    </div> : 

                    <div className={styles.timeContainer}>
                        <img className={styles.clockIcon} src={clockIcon} alt="Clock icon" />
                        <p>{deliveryTime}</p>
                    </div> }
                </li>
                <li><button onClick={() => {setEditTimeOn(true); ref.current.focus();}}>Choose time</button></li>
            </ul>
        </div>
    );
};

export { Address };