import React from 'react';
import styles from './addressForm.module.css';

const AddressForm = ({handleInfoSubmit}) => {
    return (
        <form className={ styles.addressForm }>
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressInput">Address</label>
                <input type="text" 
                       placeholder="Example St. 1234" 
                       id="addressInput"
                       name="address"
                       autoComplete="off"
                       spellCheck="false" />
            </div>
            <div className={ styles.inputWrapper } >
                <label htmlFor="apartmentInput">Floor/Apartment</label>
                <input type="text" 
                       placeholder="1st floor, ap. A" 
                       id="apartmentInput"
                       name="aparment" 
                       autoComplete="off"
                       spellCheck="false"/>
            </div>
            <div className={ styles.inputWrapper }>
                <label htmlFor="extraInfoInput">Extra information</label>
                <input type="text"  
                       id="extraInfoInput"
                       name="extraInfo" 
                       autoComplete="off"
                       spellCheck="false"/>
                
            </div>
            <button className={styles.formSubmit}
                    type="submit"
                    onClick={handleInfoSubmit}>Save</button>
        </form>
    );    
/*
    return (
        <form className={ styles.addressForm } 
              onSubmit={() => {console.log("submit"); handleInfoSubmit} }>
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressInput">Address</label>
                <input type="text" 
                       placeholder="Example St. 1234" 
                       id="addressInput"
                       name="address"
                       autoComplete="off"
                       spellCheck="false" />
            </div>
            <div className={ styles.inputWrapper } >
                <label htmlFor="apartmentInput">Floor/Apartment</label>
                <input type="text" 
                       placeholder="1st floor, ap. A" 
                       id="apartmentInput"
                       name="aparment" 
                       autoComplete="off"
                       spellCheck="false"/>
            </div>
            <div className={ styles.inputWrapper }>
                <label htmlFor="extraInfoInput">Extra information</label>
                <input type="text"  
                       id="extraInfoInput"
                       name="extraInfo" 
                       autoComplete="off"
                       spellCheck="false"/>
                
            </div>
            <button className={styles.formSubmit}
                    type="submit"
                    onClick={e => e.preventDefault()}>Save</button>
        </form>
    );    
    */
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