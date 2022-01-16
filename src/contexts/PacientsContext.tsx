import { createContext, useState, useEffect } from 'react';
import { ApiResponse, IPacient } from '../interfaces/IPacient';
import axios from 'axios';


type ContextType = {
    pacients: IPacient[];
    displayingPacients: IPacient[];
    page: number;
    setPage: React.SetStateAction<any>;
    loading: boolean;
    setLoading: React.SetStateAction<any>;
    filter: (text: string) => void;
}
const pacientsInitialState: Array<IPacient> = [];

export const Context = createContext<ContextType>({
    pacients: pacientsInitialState,
    displayingPacients: pacientsInitialState,
    filter: () => {},
    page: 0,
    setPage: () => {},
    loading: true,
    setLoading: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {

    const [pacients, setPacients] = useState<IPacient[]>(pacientsInitialState);
    const [displayingPacients, setDisplayingPacients] = useState<IPacient[]>(pacients);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        const response = await axios.get<ApiResponse>('https://randomuser.me/api', {
            params: {
                results: 50,
                page: 1,
            }
           
        })
        
        setPacients([...pacients, ...response.data.results]);
        setDisplayingPacients([...pacients, ...response.data.results]);

        setLoading(false)
    }

    const filter = (text: string) => {
        console.log(text.trim().length)
        
        const filteredPacients = text.trim().length > 0 ? pacients
            .filter((pacient) => pacient.name.first.toLowerCase().indexOf(text.trim().toLowerCase()) >= 0) : pacients

            console.log('filtrados: ' + filteredPacients.length);
            console.log('todos: ' + pacients.length);
            setDisplayingPacients(filteredPacients);
    }


   

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <Context.Provider value={{pacients, page, setPage, loading, setLoading, filter, displayingPacients }}>
            {children}
        </Context.Provider>
    )
}