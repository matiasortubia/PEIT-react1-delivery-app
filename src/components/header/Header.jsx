import React, { useEffect } from 'react'
import { getRestaurants } from '../../services'
import cartLogo from '../../assets/cart.svg'
import styles from './header.module.css'

const Header = () => {
    const [restaurants, setRestaurants] = React.useState([])
    // eslint-disable-next-line
    const [cart, setCart] = React.useState([])

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

export default Header