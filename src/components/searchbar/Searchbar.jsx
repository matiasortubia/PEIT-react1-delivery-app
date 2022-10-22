import React from 'react';
import { useState, useEffect } from 'react';
import { getRestaurants } from '../../services/getRestaurants.js';
import magnifyingGlassIcon from './magnifying-glass-solid.svg';
import styles from './searchbar.module.css';

function Searchbar(props) {
    const [input, setInput] = useState('');

    const [debouncedInput, setDebouncedInput] = useState(input);

    // Función debounce: añade un delay antes de realizar la búsqueda
    useEffect(() => {
        const timer = setTimeout(() => setInput(debouncedInput), 1000);
        return () => clearTimeout(timer);
    }, [debouncedInput]);

    const filterRestaurants = function (restaurants, inputText) {
        const filteredRestaurants = restaurants.filter(el => {
            return el.name.toLowerCase().includes(inputText.toLowerCase());
        });
        return filteredRestaurants;
    };
    
    useEffect(() => {
        if(input !== '') {
            getRestaurants().then(res => console.log(filterRestaurants(res, input)));

            // Después se va a usar algo así:
            // getRestaurants().then(res => filterRestaurants(res, input)).then(res => props.onChange(res));
        }
        else {
            // props.onChange([]); // Se dejan de mostrar resultados
            console.log([]);
        }
    }, [input]);
    
    return (
        <div className={ styles.searchbarContainer }>
            <input className={ styles.input }
                   type="text" 
                   placeholder="Search for a restaurant" 
                   value={ debouncedInput } 
                   onChange={ e => setDebouncedInput(e.target.value) } id="searchbarInput" />
            <label for="searchbarInput">
                <img className={ styles.magnifyingGlassIcon } 
                    src={ magnifyingGlassIcon }
                    alt="Magnifying glass icon" />
            </label>
        </div>
    );
}

export { Searchbar };
