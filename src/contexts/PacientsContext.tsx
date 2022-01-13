import { createContext, useState, useEffect } from 'react';
import { ApiResponse, IPacient } from '../interfaces/IPacient';
import axios from 'axios';


type ContextType = {
    pacients: IPacient[];
    displayingPacients: IPacient[];
    setDisplayingPacients: React.SetStateAction<any>;
    page: number;
    setPage: React.SetStateAction<any>;
    loading: boolean;
    setLoading: React.SetStateAction<any>;
    filter: () => void;
}
const pacientsInitialState: Array<IPacient> = [];

export const Context = createContext<ContextType>({
    pacients: pacientsInitialState,
    displayingPacients: pacientsInitialState,
    setDisplayingPacients: () => {},
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

    const filter = () => {
        console.log('FILTRAR')
    }


    // const filteredCustomers = searchTerm.trim().length > 0 ? 
    // customers.filter(
    //     (customer) => customer.name.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) >= 0)
    //         : customers

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <Context.Provider value={{pacients, page, setPage, loading, setLoading, filter, displayingPacients, setDisplayingPacients}}>
            {children}
        </Context.Provider>
    )
}