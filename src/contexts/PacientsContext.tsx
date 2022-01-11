import React, { createContext, useState } from "react";
import { IPacient } from '../interfaces/IPacient';

type PacientsContextProps = {
    children: React.ReactNode
}


type InitialValueType = {
    pacients: Array<IPacient> | null;
    setPacients: (pacients: IPacient[]) => void; 
}

const initialValue: InitialValueType = {
    pacients: [],
    setPacients: () => {},
} 

export const PacientsContext = createContext<InitialValueType>(initialValue);

export const PacientsContextProvider = ({children}: PacientsContextProps) => {

    const [pacients, setPacients] = useState<Array<IPacient> | null>(initialValue.pacients);

    return (
        <PacientsContext.Provider value={{pacients, setPacients}}>
            {children}
        </PacientsContext.Provider>
    )
}