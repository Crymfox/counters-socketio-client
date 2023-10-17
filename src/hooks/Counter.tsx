import { useContext } from "react"
import { Socket } from "socket.io-client"
import { Context, socket } from "../components/Context"

type Props = {
    socket: Socket
}

export const useCounter = () => {
    const {count, setCount} = useContext(Context)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return {count, increment, decrement}
}