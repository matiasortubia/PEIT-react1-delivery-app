import React from 'react';
import { useState } from 'react';
import styles from './addressForm.module.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressForm = ({handleInfoSubmit}) => {
    const [addressText, setAddressText] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [apartmentText, setApartmentText] = useState('');
    const [extraInfoText, setExtraInfotext] = useState('');
    const [isValidInput, setIsValidInput] = useState({"street": true, "addressNumber": true, "apartmentText": true, "extraInfo": true});

    const formik = useFormik({
        initialValues: {
            addressStreet: '',
            addressNumber: '',
            appartment: '',
            city: '',
            country: '',
            extraInfo: '',
        },
        validationSchema: Yup.object().shape({
            addressStreet: Yup.string()
                .max(30, "Street name can't be longer than 30 characters.")
                .required("Address street is required."),
            addressNumber: Yup.number()
                .min(1, "Address number can't be less than 1.")
                .max(9999, "Address number is too high.")
                .required("Address Number is required."),
            appartment: Yup.string()
                .max(20),
            city: Yup.string()
                .max(30)
                .required("City is required"),
            country: Yup.string()
                .max(30)
                .required("Country is required"),
            extraInfo: Yup.string()
                .max(250)
        }),
        onSubmit: (values) => {
            console.log(values);
            const trimmedAddress = values.addressStreet.trim();
            handleInfoSubmit(trimmedAddress, values.addressNumber, values.appartment, "extra info");
        }
    });

    /* Input validations */
    const validateOnlyLetters = input => {
        return input !== '' && (/^[(A-Za-zÀ-ÖØ-öø-ÿ)|.|']*$/.test(input));
    };
    /* **************** */

    const infoSubmit = e => {
        e.preventDefault();
        const addressTrimmed = addressText.trim();
        let isValidStreet = validateOnlyLetters(addressTrimmed);
        setIsValidInput({street: isValidStreet});
        isValidStreet && handleInfoSubmit(addressTrimmed, addressNumber, apartmentText, extraInfoText);
    };

    return (
        <form onSubmit={ formik.handleSubmit } className={ styles.addressForm }>
            {/* Address Street Input */}
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressStreet">
                    { formik.touched.addressStreet && formik.errors.addressStreet ? formik.errors.addressStreet : "Street" }
                </label>
                <input className={ styles.addressFormInput }
                       name="addressStreet"
                       type="text"
                       value={ formik.values.addressStreet }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="Example St." />
            </div>
            {/* Address Number Input */}
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressNumber">Address Number</label>
                <input className={ styles.addressFormInput }
                       name="addressNumber"
                       type="number"
                       value={ formik.values.addressNumber }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="1234" />
            </div>

            {/* Appartment Input */}
            <div className={ styles.inputWrapper } >
                <label htmlFor="appartment">Floor/Appartment</label>
                <input className={ styles.addressFormInput }
                       name="appartment"
                       type="text"
                       value={ formik.values.appartment }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="1st floor, ap. A" />
            </div>

            {/* City Input */}
            <div className={ styles.inputWrapper } >
                <label htmlFor="city">City</label>
                <input className={ styles.addressFormInput }
                       name="city"
                       type="text"
                       value={ formik.values.city }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="City" />
            </div>

            {/* Country Input */}
            <div className={ styles.inputWrapper } >
                <label htmlFor="country">Country</label>
                <input className={ styles.addressFormInput }
                       name="country"
                       type="text"
                       value={ formik.values.country }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="Country" />
            </div>

            <button className={styles.formSubmit}
                    type='submit'>Save</button>


        </form>
    );
}

export { AddressForm };
/*
    return (
        <form className={ styles.addressForm } onSubmit={infoSubmit}>
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressInput">Street</label>
                <input className={ `${ styles.addressFormInput } ${ isValidInput.street ? "" : styles.invalidInput }` }
                       type="text" 
                       required
                       placeholder="Example St." 
                       id="addressInput"
                       name="address"
                       autoComplete="off"
                       spellCheck="false" 
                       value={addressText} 
                       maxLength="25"
                       onChange={e => setAddressText(e.target.value)} />
            </div>
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressNumberInput">Address Number</label>
                <input type="number" 
                       required
                       placeholder="1234" 
                       id="addressNumberInput"
                       name="addressNumber"
                       autoComplete="off"
                       min="1"
                       max="9999"
                       value={addressNumber} 
                       onChange={e => setAddressNumber(e.target.value)} />
            </div>
            <div className={ styles.inputWrapper } >
                <label htmlFor="apartmentInput">Floor/Apartment</label>
                <input type="text" 
                       placeholder="1st floor, ap. A" 
                       id="apartmentInput"
                       name="aparment" 
                       autoComplete="off"
                       spellCheck="false"
                       maxLength="25"
                       value={apartmentText}
                       onChange={e => setApartmentText(e.target.value)} />
            </div>
            <div className={ styles.inputWrapper }>
                <label htmlFor="extraInfoInput">Extra information</label>
                <textarea className={styles.addressTextArea}
                       placeholder="Ex: Flat on a corner"
                       id="extraInfoInput"
                       name="extraInfo" 
                       autoComplete="off"
                       spellCheck="false"
                       maxLength="255"
                       value={extraInfoText} 
                       onChange={e=> setExtraInfotext(e.target.value)} />
                
            </div>
            <button className={styles.formSubmit}
                    type="submit"
                    onClick={e => e.preventDefault}>Save</button>
        </form>
    );
};

export { AddressForm }; */