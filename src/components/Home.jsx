import React from 'react';
import { Searchbar, Categories, Products, Skeleton, Header } from './index';
import { getProducts, getRestaurants } from '../services';
import styles from './home.module.css';
import { useInfiniteScroll } from '../hooks&aux/useInfiniteScroll';
import { filterResults } from '../hooks&aux/filterResults';
import { getTitleByHour } from '../hooks&aux/getTitleByHour'

export const Home = ({ handleOpenModal }) => {

    const [products, setProducts] = React.useState([]);
    const [initialProducts, setInitialProducts] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const [loadSkeleton, setLoadSkeleton] = React.useState(null);
    const [restaurants, setRestaurants] = React.useState([]);

    useInfiniteScroll(page, setPage, initialProducts, products, setProducts, setLoadSkeleton);

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
        setLoading(false);
    }, [restaurants]);

    /* Renders the list of products, or a message if no results were found. */
    const renderResults = () => {
        if(restaurants.length > 0) {
            return <Products id='productList' arrayProduct={products} search={restaurants} />;
        } else {
            return (
                <div className={styles.noResultsMessage}>
                    <p>No restaurants were found.</p>
                </div>
            );
        }
    }

    return (

        <div className={styles.wrapper}>
            <Header onClick={handleOpenModal} />
            <Searchbar onSearchSubmit={input => onSearchSubmit(input)} />
            <Categories pagination={{setPage}} setInitialProducts={setInitialProducts} setProducts={setProducts} setLoading={setLoading} />
            {getTitleByHour()}
            {loading ? <> <Skeleton /> <Skeleton /> </> : renderResults()}
            {loadSkeleton && <><Skeleton /></>}
        </div>
    )
}
