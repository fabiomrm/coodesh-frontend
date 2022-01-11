import { IPacient } from "../interfaces/IPacient";

export const formatFullName = (pacient: IPacient): string => {
    return `${pacient.name.title}. ${pacient.name.first} ${pacient.name.last}`
}