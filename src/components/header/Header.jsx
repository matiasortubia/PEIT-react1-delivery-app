import React, { useEffect } from 'react'
import { getCart, getRestaurants } from '../../services'
import cartLogo from '../../assets/cart.svg'
import styles from './header.module.css'

export const Header = () => {
    const [restaurants, setRestaurants] = React.useState([])

    const [cart, setCart] = React.useState([])

    useEffect(() => {
        getCart()
            .then(res => setCart(res))
    }, [])

    useEffect(() => {
        getRestaurants().then((res) => {
            setRestaurants(res)
        })
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>What do you<br />have a taste for?</h1>

                <div className={styles.cartWrapper}>
                    <img src={cartLogo} alt="cart logo" />
                    {cart.length > 0 && <span className={styles.cartItems}>{cart.length}</span>}
                </div>
            </div>
            {
                restaurants.length > 0 && <p className={styles.restaurantsAvaible}>{restaurants.length} Restaurants avaible</p>
            }
        </>
    )
}
