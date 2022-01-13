import { createContext, useState, useEffect } from 'react';
import { ApiResponse, IPacient, IInfo } from '../interfaces/IPacient';
import axios from 'axios';


type ContextType = {
    pacients: IPacient[];
    page: number;
    setPage: React.SetStateAction<any>;
    fetchData: () => void;
}
const pacientsInitialState: Array<IPacient> = [];

export const Context = createContext<ContextType>({
    pacients: pacientsInitialState,
    page: 0,
    setPage: () => {},
    fetchData: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {

    const [pacients, setPacients] = useState<IPacient[]>(pacientsInitialState);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        const response = await axios.get<ApiResponse>('https://randomuser.me/api', {
            params: {
                results: 50,
                page: 1,
            }
           
        })
        setPacients([...pacients, ...response.data.results]);
    }


    // const filteredCustomers = searchTerm.trim().length > 0 ? 
    // customers.filter(
    //     (customer) => customer.name.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) >= 0)
    //         : customers

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Context.Provider value={{pacients, page, setPage, fetchData}}>
            {children}
        </Context.Provider>
    )
}