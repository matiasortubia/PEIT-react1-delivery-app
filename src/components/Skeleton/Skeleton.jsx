import React from 'react'
import styles from './skeleton.module.css'

export const Skeleton = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.img}></span>
            <span className={styles.title}></span>
            <span className={styles.category}></span>
            <span className={styles.rating}> </span>
        </div>
    )
}
