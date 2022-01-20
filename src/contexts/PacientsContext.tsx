import { createContext, useState, useEffect } from 'react';
import { ApiResponse, IPacient } from '../interfaces/IPacient';
import axios from 'axios';
import { formatFullName } from '../assets/utils';


type ContextType = {
    pacients: IPacient[];
    displayingPacients: IPacient[];
    page: number;
    setPage: React.SetStateAction<any>;
    loading: boolean;
    setLoading: React.SetStateAction<any>;
    filter: (t:string, o: 'gender' | 'name') => void;
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

    const filter = (text: string, option: 'name' | 'gender') => {
        console.log(text.trim().length)
    
        const filteredPacients = text.trim().length > 0 ? pacients
            .filter((pacient) => formatFullName(pacient).toLowerCase().indexOf(text.trim().toLowerCase()) >= 0) : pacients
        
            
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