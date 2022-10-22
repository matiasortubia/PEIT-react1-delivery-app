import React from 'react'
import Card from '../Card/Card'
import { getTitleByHour } from '../../hooks&aux/getTitleByHour'
import styles from './products.module.css'


export const Products = ({ arrayProduct }) => {
    return (
        <div className={styles.wrapper}>
            {getTitleByHour()}
            {arrayProduct.map(e => (
                <Card key={e.id} product={e} />
            ))}
        </div>
    )
}