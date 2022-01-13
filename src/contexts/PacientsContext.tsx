import { createContext, useState, useEffect } from 'react';
import { ApiResponse, IPacient, IInfo } from '../interfaces/IPacient';
import axios from 'axios';


type ContextType = {
    pacients: IPacient[];
    currentPage: number;
}
const pacientsInitialState: Array<IPacient> = [];

export const Context = createContext<ContextType>({
    pacients: pacientsInitialState,
    currentPage: 0,
});

export const ContextProvider: React.FC = ({ children }) => {

    const [pacients, setPacients] = useState<IPacient[]>(pacientsInitialState);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async () => {
        const response = await axios.get<ApiResponse>('https://randomuser.me/api/', {
            params: {
                results: 50,
                page: currentPage,
            }
           
        })
        setPacients(response.data.results);
    }


    // const filteredCustomers = searchTerm.trim().length > 0 ? 
    // customers.filter(
    //     (customer) => customer.name.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) >= 0)
    //         : customers

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Context.Provider value={{pacients, currentPage}}>
            {children}
        </Context.Provider>
    )
}