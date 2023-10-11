import { createContext, useState, useEffect } from "react";
import baseUrl from '../Components/Utils/api';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [paciente, setPaciente] = useState([]);

    const getPaciente = async () => {
        try {
            const res = await fetch(`${baseUrl}/paciente`);
            if (!res.ok) {
                throw new Error(`Failed to fetch dentista data: ${res.statusText}`);
            }
            const data = await res.json();
            setPaciente(data);
        } catch (error) {
            console.error('Error fetching pacientes:', error);
        }
    };

    // useEffect(() => {
    //     getPaciente();
    // }, [])

    const buscaPacientePeloCodigo = (id) => {
        getPaciente();
        return paciente.find((paciente) => paciente.CODIGO === id);
    }



    return (
        <AppContext.Provider value={{ paciente, getPaciente, buscaPacientePeloCodigo }}>
            {children}
        </AppContext.Provider>
    )

}