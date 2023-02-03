import { useCounter } from "../hooks/Counter"

const Navbar = () => {
    const { count } = useCounter()
    return (
        <>
            <h1>The count is : {count}</h1>
        </>
    )
}

export default Navbar