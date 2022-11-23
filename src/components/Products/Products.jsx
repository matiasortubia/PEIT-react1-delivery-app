import React from 'react'
import Card from '../Card/Card'
import styles from './products.module.css'
import { CardModal } from '../Modal/CardModal'
import { Skeleton } from '../Skeleton/Skeleton'

export const Products = ({ arrayProduct}) => {
    const [opened, setOpened] = React.useState(null)

    return (
        <>
            {
                arrayProduct.length > 0 ?
                    <div className={styles.wrapper}>
                        {arrayProduct.map((e, i) => (
                            <CardModal key={e.id} id={i} opened={opened} setOpened={setOpened} product={e} card={<Card key={e.id} id={i} product={e} />} />
                        ))}
                    </div> : <Skeleton />
            }
        </>
    )
}