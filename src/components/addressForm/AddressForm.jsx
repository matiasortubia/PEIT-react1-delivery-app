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
                .max(30, "Street name is too long.")
                .required("Field required.")
                //.matches(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/, "Invalid input."),
                .matches(/^[-@'À-ÖØ-öø-ÿ.\/#&\w\s]*$/, "Invalid input."),
            addressNumber: Yup.number()
                .min(1, "Invalid input.")
                .max(9999, "Address number is too high.")
                .required("Field required."),
            appartment: Yup.string()
                .max(20),
            extraInfo: Yup.string()
                .max(250)
        }),
        onSubmit: (values) => {
            console.log(values);
            const trimmedAddress = values.addressStreet.trim();
            trimmedAddress !== '' && handleInfoSubmit(trimmedAddress, 
                                                      values.addressNumber, 
                                                      values.appartment, 
                                                      values.extraInfo);
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
                <div className={ styles.labelsWrapper }>
                    <label htmlFor="addressStreet">
                        Street
                    </label>
                    { formik.touched.addressStreet && formik.errors.addressStreet &&
                    <label className={ styles.invalidInputMessage } htmlFor="addressStreet">
                        {formik.errors.addressStreet}
                    </label> }
                </div>
                <input className={ styles.addressFormInput }
                       name="addressStreet"
                       type="text"
                       maxLength="25"
                       value={ formik.values.addressStreet }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="Example St." />
            </div>
            {/* Address Number Input */}
            <div className={ styles.inputWrapper } >
                <div className={ styles.labelsWrapper }>
                    <label htmlFor="addressNumber">
                        Address Number
                    </label>
                    { formik.touched.addressNumber && formik.errors.addressNumber &&
                    <label className={ styles.invalidInputMessage } htmlFor="addressNumber">
                        {formik.errors.addressNumber}
                    </label> }
                </div>
                <input className={ styles.addressFormInput }
                       name="addressNumber"
                       type="number"
                       min="1"
                       max="9999"
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
                       maxLength="20"
                       value={ formik.values.appartment }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="1st floor, ap. A" />
            </div>
            {/* Extra info */}
            <div className={ styles.inputWrapper } >
                <label htmlFor="extraInfo">Extra info</label>
                <textarea className={ styles.addressTextArea }
                       name="extraInfo"
                       maxLength={200}
                       value={ formik.values.extraInfo }
                       onChange={ formik.handleChange }
                       onBlur={ formik.handleBlur }
                       placeholder="Ex: flat on a corner" />
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