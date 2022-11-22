import React from 'react';
import styles from './addressForm.module.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressForm = ({handleInfoSubmit}) => {
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
            const trimmedAddress = values.addressStreet.trim();
            trimmedAddress !== '' && handleInfoSubmit(trimmedAddress, 
                                                      values.addressNumber, 
                                                      values.appartment, 
                                                      values.extraInfo);
        }
    });

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
                       autoComplete="off"
                       spellCheck="false"
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
                       autoComplete="off"
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
                       autoComplete="off"
                       spellCheck="off"
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
                       spellCheck="false"
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