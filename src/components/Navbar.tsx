import { useCounter } from "../hooks/Counter"

type Props = {
    count: number
}

const Navbar = ({count}: Props) => {
    return (
        <>
            <h1>The count is : {count}</h1>
        </>
    )
}

export default Navbar