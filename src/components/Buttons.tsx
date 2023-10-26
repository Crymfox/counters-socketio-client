import { useCounter } from "../hooks/Counter" 

const Buttons = ({current}: {current: number}) => {
    const { increment, decrement } = useCounter(current)    
    return (
        <>
            <button className="
                px-8 py-2 bg-red-500 text-4xl rounded-l-lg
            " onClick={decrement}>-</button>
            <button className="
                px-7 py-2 bg-green-500 text-4xl rounded-r-lg
            " onClick={increment}>+</button>
        </>
    )
}

export default Buttons