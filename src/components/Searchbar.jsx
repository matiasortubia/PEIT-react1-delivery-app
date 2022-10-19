import React from 'react';

import { useState, useEffect } from 'react';

function Searchbar() {
    const [input, setInput] = useState('');

    const [debouncedInput, setDebouncedInput] = useState(input);

    useEffect(() => {
        const timer = setTimeout(() => setInput(debouncedInput), 1000);
        return () => clearTimeout(timer);
    }, [debouncedInput]);
    
    useEffect(() => {
        if(input !== '') {
            console.log("Se buscan resultados");
        }
        else {
            console.log("Se dejan de mostrar resultados");
        }
    }, [input]);
    
    return (
        <>
            <input type="text" 
                   placeholder="Search for a restaurant" 
                   value={ debouncedInput } 
                   onChange={ e => setDebouncedInput(e.target.value) } />
        </>
    );
}

export { Searchbar };
