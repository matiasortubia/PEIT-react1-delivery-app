import React from 'react';
import styles from './addressForm.module.css';

const AddressForm = (props) => {

    return (
            <form className={ styles.addressForm } 
                  onSubmit={ props.handleInfoSubmit }>
                <div className={ styles.inputWrapper } >
                    <label htmlFor="addressInput">Address</label>
                    <input type="text" 
                           placeholder="Example St. 123" 
                           id="addressInput"
                           name="address" />
                </div>
                <div className={ styles.inputWrapper } >
                    <label htmlFor="apartmentInput">Floor/Apartment</label>
                    <input type="text" 
                           placeholder="Floor / Apartment number" 
                           id="apartmentInput"
                           name="aparment" />
                </div>
                <div className={ styles.inputWrapper }>
                    <label htmlFor="extraInfoInput">Indications for delivery</label>
                    <input type="text"  
                           id="extraInfoInput"
                           name="extraInfo" />
                    
                </div>
                <button type="submit" onClick={ e => e.preventDefault }>Save</button>
            </form>
    );    
    
    /*
    return (
            <form className={ styles.addressForm } 
                  onSubmit={ (e) => {e.preventDefault(); console.log("submit")} }>
                <div className={ styles.inputWrapper } >
                    <label htmlFor="addressInput">Address</label>
                    <input type="text" 
                           placeholder="Example St. 1234" 
                           id="addressInput" />
                </div>
                <button type="submit" 
                        onClick={ props.handleInfoSubmit }>Save</button>
            </form>
    );*/
};

export { AddressForm };