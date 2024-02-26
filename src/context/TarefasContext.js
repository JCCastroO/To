import { createContext, useState } from "react";

export const TarefasContext = createContext()

export function TarefasProvider({ children }) {
    const [listaTarefas, setListaTarefas] = useState([''])
    const [done, setDone] = useState([])

    return (
        <TarefasContext.Provider value={{
            listaTarefas,
            setListaTarefas,
            done,
            setDone
        }}>
            {children}
        </TarefasContext.Provider>
    )
}