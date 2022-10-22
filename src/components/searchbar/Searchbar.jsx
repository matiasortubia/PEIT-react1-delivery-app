import React from 'react';
import { useState, useEffect } from 'react';
import magnifyingGlassIcon from '../../assets/magnifying-glass-solid.svg';
import styles from './searchbar.module.css';

function Searchbar(props) {
    const [input, setInput] = useState('');
    const [debouncedInput, setDebouncedInput] = useState(input);

    // Función debounce: añade un delay antes de realizar la búsqueda
    useEffect(() => {
        const timer = setTimeout(() => setInput(debouncedInput), 1000);
        return () => clearTimeout(timer);
    }, [debouncedInput]);
    
    const onSearchSubmit = props.onSearchSubmit;
    const clearResults = props.clearResults;

    useEffect(() => {
        if(input !== '') {
            onSearchSubmit(input);
        }
        else {
            clearResults();
        }
    }, [input]);
    
    return (
        <div className={ styles.searchbarContainer }>
            <input className={ styles.input }
                   type="text" 
                   placeholder="Search for a restaurant" 
                   value={ debouncedInput } 
                   onChange={ e => setDebouncedInput(e.target.value) } id="searchbarInput" />
            <label htmlFor="searchbarInput">
                <img className={ styles.magnifyingGlassIcon } 
                    src={ magnifyingGlassIcon }
                    alt="Magnifying glass icon" />
            </label>
        </div>
    );
}

export { Searchbar };
