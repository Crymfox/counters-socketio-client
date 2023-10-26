import { useContext } from "react"
import { Socket } from "socket.io-client"
import { Context, socket } from "../components/Context"


export const useCounter = (current: number) => {
    const {count, setCount} = useContext(Context)
    const increment = () => setCount(current + 1)
    const decrement = () => setCount(current - 1)
    return {count, increment, decrement}
}