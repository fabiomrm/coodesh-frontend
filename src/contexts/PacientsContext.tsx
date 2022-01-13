import { createContext, useState, useEffect } from 'react';
import { IPacient } from '../interfaces/IPacient';
import axios from 'axios';

const pacientsInitialState: Array<IPacient> = [];

export const Context = createContext<IPacient[]>(pacientsInitialState);

export const ContextProvider: React.FC = ({ children }) => {

    const [pacients, setPacients] = useState<IPacient[]>(pacientsInitialState);

    const fetchData = async () => {
        const response = await axios.get('https://randomuser.me/api/', {
            params: {
                results: 50
            }
           
        })
        console.log(response.data.results)
        setPacients(response.data.results);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Context.Provider value={pacients}>
            {children}
        </Context.Provider>
    )
}