import React from 'react';
import { useState } from 'react';
import styles from './address.module.css';
import clockIcon from '../../assets/clock-regular.svg';
import { useEffect } from 'react';

const Address = (props) => {
    const [streetModified, setStreetModified] = useState(props.userInfo.street);
    const [deliveryTime, setDeliveryTime] = useState("13:30");
    const [editTimeOn, setEditTimeOn] = useState(false);
    const [previousTime, setPreviousTime] = useState("");

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

    useEffect(() => {
        const auxStreet = props.userInfo.street;
        if(auxStreet > 15) {
            setStreetModified(auxStreet.slice(0, 14) + '&hellip;');
        }
    }, [props.userInfo.street]);
    console.log(streetModified);
    return (
        <div>
            <ul className={styles.addressBox}>
                <li>{`${props.userInfo.street.length > 14 ? props.userInfo.street.slice(0, 11) + '...' : props.userInfo.street} ${props.userInfo.addressNumber}`}</li>
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
                            onChange={handleInputChange}
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
                        <p>{"30 min"}</p>
                    </div> }
                </li>
                <li><button>Choose time</button></li>
                {/*<li><button onClick={() => {setEditTimeOn(true)}}>Choose time</button></li>*/}
            </ul>
        </div>
    );
};

export { Address };