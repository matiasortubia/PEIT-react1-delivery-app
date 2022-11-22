import React, { useEffect, useState } from 'react';
import { getLikes } from '../../services';
import { Products } from '../Products/Products';
import { Header } from '../index';
import styles from './favs.module.css';

export const Favs = ({ handleOpenModal }) => {

    const [favs, setFavs] = useState([])

    useEffect(() => {
        getLikes()
            .then((res) => setFavs(res))
    }, [favs])

    return (
        <>
            <Header onClick={ handleOpenModal } />
            <h1 className={ styles.favsTitle }>Your favourites</h1>
            {favs.length > 0 ? 
              <Products arrayProduct={favs} /> 
            : <div className={ styles.noResultsMessage }>
                <p>Add restaurants to your favourites list by pressing the heart icon.</p>
            </div>}
        </>
    )
}
