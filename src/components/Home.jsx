import React from 'react'
import { Products, Skeleton } from './index'
import { Searchbar } from './index';
import { getProducts, getRestaurants } from '../services'
import styles from './home.module.css'
import { useInfiniteScroll } from '../hooks&aux/useInfiniteScroll'
import { filterResults } from '../hooks&aux/filterResults';


export const Home = () => {

    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [loadSkeleton, setLoadSkeleton] = React.useState(true)
    const [restaurants, setRestaurants] = React.useState([]);

    useInfiniteScroll(getProducts, products, setProducts, setLoadSkeleton)

    React.useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
    }, []);

    /* Updates 'restaurants' state with results that include the user's input
    @param input: searchbar input value */
    const onSearchSubmit = async input => {
        setLoading(true);
        getRestaurants()
            .then(res => filterResults(res, input))
            .then(results => {
                setRestaurants(results);
                setLoading(false);
            });
    };

    const clearResults = () => {
        setRestaurants([]);
    };

    return (
        <div className={styles.wrapper}>
            <Searchbar onSearchSubmit={input => onSearchSubmit(input)}
                clearResults={clearResults} />
            {loading ? <> <Skeleton /> <Skeleton /> </> : <Products id='productList' arrayProduct={products} search={restaurants} />}
            {loadSkeleton && <><Skeleton /></>}
            
        </div>
    )
}
