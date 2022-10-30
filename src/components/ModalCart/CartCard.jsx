import React from 'react';
import styles from './CartCard.module.css';
import deleteIcon from '../../assets/delete.svg';

export const CartCard = ({ product, restaurants }) => {

    const restaurantName = restaurants?.find((res) => res.id === product.restaurantId)?.name

    return (
        <>
            <section className={styles.section}>
                <img className={styles.img} src={product.img} alt={product.name} />
                <div className={styles.contentTitles}>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.restaurantName}>{restaurantName}</p>
                </div>
                <p className={styles.price}>${product.price} x1</p>
                <img className={styles.delete} src={deleteIcon} alt='delete icon' />
            </section>
        </>
    )
}
