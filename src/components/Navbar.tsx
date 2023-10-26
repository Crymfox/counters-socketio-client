import { useCounter } from "../hooks/Counter"

type Props = {
    count: number
}

const Navbar = ({count}: Props) => {
    return (
        <div className="grid place-items-center">
            <h1 className="text-8xl">{count}</h1>
        </div>
    )
}

export default Navbar