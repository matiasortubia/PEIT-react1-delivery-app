import React, { useState, useEffect } from 'react'
import { getRestaurants } from '../services'
const Header = () => {
    console.log(module.exports)
    const [restaurants, setRestaurants] = React.useState([])
    useEffect(() => {
        getRestaurants().then((res) => {
            setRestaurants(res)
        })

    }, [])


    return (
        <>
            <h1>What do you have a taste for?</h1>
            <p>{restaurants.length} Restaurants avaible</p>
        </>
    )
}

export default Header