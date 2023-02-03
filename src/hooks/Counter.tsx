import { useContext } from "react"
import { Context } from "../components/Context"

export const useCounter = () => {
    const {count, setCount} = useContext(Context)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return {count, increment, decrement}
}