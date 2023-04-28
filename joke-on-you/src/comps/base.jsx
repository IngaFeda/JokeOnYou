import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const Base = createContext();

export function Code({children}) {

    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => setList(res.data.jokes));
    }, []);


    return (
        <Base.Provider value={{
            list
        }}>
            {children}
        </Base.Provider>
    );

}