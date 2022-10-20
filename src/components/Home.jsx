import React from 'react'
import { Products, Skeleton } from './index'
import { getProducts } from '../services'
import styles from './home.module.css'
import { useInfiniteScroll } from '../hooks&aux/useInfiniteScroll'

export const Home = () => {

    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [loadSkeleton, setLoadSkeleton] = React.useState(true)

    useInfiniteScroll(getProducts, products, setProducts, setLoadSkeleton)

    React.useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.wrapper}>
            {loading ? <> <Skeleton /> <Skeleton /> </> : <Products id='productList' arrayProduct={products} />}
            {loadSkeleton && <><Skeleton /></>}
        </div>
    )
}
