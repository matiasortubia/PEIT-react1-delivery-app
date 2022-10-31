import React from 'react'
import { CartState } from '../../CartContext/CartContext'
import styles from './TotalPrice.module.css'

export const TotalPrice = () => {
    const { state: { cart } } = CartState();
    const initialValue = 0;
    const totalPrice = cart.reduce((prev, current) => prev + current.price, initialValue)

    return (
        <span className={styles.totalPrice}>Total: {totalPrice}</span>
    )
}
