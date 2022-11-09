import React, { useEffect, useState } from 'react';
import { getLikes } from '../../services';
import Card from '../Card/Card';


export const Favs = () => {

    const [favs, setFavs] = useState([])

    useEffect(() => {

        getLikes()
            .then((res) => setFavs(res))

    }, [])



    return (
        <div>
            {
                favs.map(
                    fav => <Card key={fav.id} product={fav} />
                )
            }
        </div>
    )
}
