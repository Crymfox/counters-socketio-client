import { useCounter } from "../hooks/Counter" 

const Buttons = ({current, accessible}: {current: number, accessible: boolean}) => {
    const { increment, decrement } = useCounter(current)    
    return (
        <>
            <button className={`
                px-8 py-2 text-4xl rounded-l-lg ${!accessible ? "cursor-not-allowed bg-slate-500 text-white" : "bg-red-500"}
            `} onClick={decrement} disabled={!accessible}>-</button>
            <button className={`
                px-7 py-2 text-4xl rounded-r-lg ${!accessible ? "cursor-not-allowed bg-slate-600 text-white" : "bg-green-500"}
            `} onClick={increment} disabled={!accessible}>+</button>
        </>
    )
}

export default Buttons