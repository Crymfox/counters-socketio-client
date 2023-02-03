import { useCounter } from "../hooks/Counter" 

const Buttons = () => {
    const { increment, decrement } = useCounter()    
    return (
        <>
            <button className="px-3 py-2 bg-red-500" onClick={decrement}>decrement</button>
            <button className="px-3 py-2 bg-green-500" onClick={increment}>increment</button>
        </>
    )
}

export default Buttons