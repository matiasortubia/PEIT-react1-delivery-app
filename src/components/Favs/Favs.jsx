import React, { useEffect, useState } from 'react';
import { getLikes } from '../../services';
import { Products } from '../Products/Products';


export const Favs = () => {

    const [favs, setFavs] = useState([])

    useEffect(() => {

        getLikes()
            .then((res) => setFavs(res))

    }, [])



    return (
        <div>
            <Products arrayProduct={favs} />
        </div>
    )
}
