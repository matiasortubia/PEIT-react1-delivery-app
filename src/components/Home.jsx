import React from 'react'
import { Searchbar, Categories, Products, Skeleton } from './index';
import { getProducts, getRestaurants } from '../services'
import styles from './home.module.css'
import { useInfiniteScroll } from '../hooks&aux/useInfiniteScroll'
import { filterResults } from '../hooks&aux/filterResults';

export const Home = () => {

    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [loadSkeleton, setLoadSkeleton] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState([]);

    const [showResults, setShowResults] = React.useState(true);

    useInfiniteScroll(getProducts, products, setProducts, setLoadSkeleton)

    /* gets all products & sets the products in state */
    React.useEffect(() => {
        restaurants.length === 0 &&
            getProducts()
                .then(res => {
                    setProducts(res)
                    setLoading(false)
                })
    }, [restaurants]);

    /* Updates 'restaurants' state with results that include the user's input */
    const onSearchSubmit = async input => {
        getRestaurants()
            .then(res => filterResults(res, input))
            .then(results => {
                setRestaurants(results);
            });
    };

    React.useEffect(() => {
        setLoading(true);
        restaurants.length > 0 &&
            getProducts(null, 'completeList')
                .then(products => products.filter(product => product.restaurantId === restaurants[0]?.id))
                .then(arrayProduct => setProducts(arrayProduct));
        setLoading(false)
    }, [restaurants])
/*
    const clearResults = () => {
        setRestaurants([]);
    };*/

    const renderResults = () => {
        if(restaurants.length > 0) {
            console.log("resultss");
            return (
                loading ? <> <Skeleton /> <Skeleton /> </> : <Products id='productList' arrayProduct={products} search={restaurants} />
            );
        }
        else {
            console.log("No results");
            return (
                <div>
                    NO RESULTS
                </div>
            );
        }
    }

    console.log(restaurants);

    return (

        <div className={styles.wrapper}>
            <Searchbar onSearchSubmit={input => onSearchSubmit(input)} />
            <Categories products={products} setProducts={setProducts} setLoading={setLoading} />
            {renderResults()}
            {loadSkeleton && <><Skeleton /></>}

        </div>
    )
}
