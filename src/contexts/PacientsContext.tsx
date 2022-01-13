import { createContext, useState, useEffect } from 'react';
import { ApiResponse, IPacient } from '../interfaces/IPacient';
import axios from 'axios';


type ContextType = {
    pacients: IPacient[];
    page: number;
    setPage: React.SetStateAction<any>;
    loading: boolean;
    setLoading: React.SetStateAction<any>;
}
const pacientsInitialState: Array<IPacient> = [];

export const Context = createContext<ContextType>({
    pacients: pacientsInitialState,
    page: 0,
    setPage: () => {},
    loading: true,
    setLoading: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {

    const [pacients, setPacients] = useState<IPacient[]>(pacientsInitialState);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        const response = await axios.get<ApiResponse>('https://randomuser.me/api', {
            params: {
                results: 50,
                page: 1,
            }
           
        })
        console.log('bati aqui')
        setPacients([...pacients, ...response.data.results]);
        setLoading(false)
    }



    // const filteredCustomers = searchTerm.trim().length > 0 ? 
    // customers.filter(
    //     (customer) => customer.name.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) >= 0)
    //         : customers

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <Context.Provider value={{pacients, page, setPage, loading, setLoading}}>
            {children}
        </Context.Provider>
    )
}