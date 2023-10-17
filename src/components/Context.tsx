import { createContext, useState, useMemo, useEffect } from "react"
import io from "socket.io-client"

type ContextType = {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const socket = io('http://localhost:5000')
export const Context = createContext({} as ContextType)

type Props = {
    children: React.ReactNode,
    currentCount: number
}

export const Provider = ({ children, currentCount }: Props) => {
    const [count, setCount] = useState(currentCount)
    const value = useMemo(() => ({count, setCount}), [count, setCount])
    useEffect(() => {
        socket.emit('count change', count)
    }, [count])
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}