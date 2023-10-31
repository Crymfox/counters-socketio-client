import { useCounter } from "../hooks/Counter"

type Props = {
    count: number
}


const Navbar = ({count}: Props) => {
    const {current} = useCounter(count)
    return (
        <div className="grid place-items-center my-4">
            <h1 className="text-8xl">{current}</h1>
        </div>
    )
}

export default Navbar