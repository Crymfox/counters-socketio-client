import { createContext, useState, useMemo } from "react"

export const Context = createContext({} as number | any)

export const Provider = ({ children }: any) => {
    const [count, setCount] = useState(0)
    const value = useMemo(() => ({count, setCount}), [count, setCount])
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}