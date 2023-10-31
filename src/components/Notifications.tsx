import { useEffect, useState } from "react"
import { Socket } from "socket.io-client"

type userData = {
    id: string,
    count: number,
    requests: string[],
    admins: string[]
}

type Props = {
    open: () => void,
    close: () => void,
    users: userData[]
    socket: Socket,
}

const Notifications = ({ open, close, users, socket}: Props) => {
    const [index, setIndex] = useState(0)
    const [requests, setRequests] = useState([] as string[])
    const [admins, setAdmins] = useState([] as string[])
    useEffect(() => {
        socket.on('users_updated', (usersList: userData[]) => {
            setIndex(usersList.findIndex((user: userData) => user.id == socket.id))
            setRequests(usersList[index].requests)
            setAdmins(usersList[index].admins)
        })
        console.log(index)
    }, [users])
    return (
        <div className="col-span-4">
        <dialog className="bg-white ring-2 ring-slate-600 rounded-lg p-4 w-1/4">
          <div className="grid place-items-center gap-2">
            <h1 className="text-2xl text-slate-800">Notifications</h1>
            {
                requests.length > 0 || admins.length > 0 ?
                <>
                    {
                        requests.length > 0 &&
                        <>
                            <h1 className="text-sm text-slate-500 place-self-start mt-1">Requests:</h1>
                            {
                                requests.map((request: string, key: number) => {
                                    return (
                                        <div key={key} className="flex ring-2 ring-slate-200 w-full">
                                            <h1 className="text-sm text-slate-800 mr-auto">User {request}</h1>
                                            <button className="bg-green-500 text-white text-xs px-2 py-1 rounded-lg" onClick={() => {socket.emit('accept_request', {socketId: socket.id, key: request})}}>Accept</button>
                                            <button className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg" onClick={() => {socket.emit('reject_request', {socketId: socket.id, key: request})}}>Reject</button>
                                        </div>
                                    )
                                })
                            } 
                        </>
                    }
                    {
                        admins.length > 0 &&
                        <>
                            <h1 className="text-sm text-slate-500 place-self-start mt-1">Admins:</h1>
                            {
                                admins.map((admin: string, key: number) => {
                                    return (
                                        <div key={key} className="flex ring-2 ring-slate-200 w-full">
                                            <h1 className="text-sm text-slate-800 mr-auto">User {admin}</h1>
                                            <button className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg" onClick={() => {socket.emit('remove_admin', {socketId: socket.id, key: admin})}}>Remove</button>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                </> : <h1 className="text-sm my-4 text-slate-500">No notifications</h1>
            }
            <button className="bg-slate-500 text-white px-4 py-2 my-4 rounded-lg" onClick={close}>Close</button>
          </div>
        </dialog>
        <button className="bg-slate-500 text-white px-4 py-2 my-4 rounded-lg" onClick={open}>
            Notifications
            {
                requests.length > 0 ? <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-xl ml-2">{requests.length}</span> : null
            }
        </button>
      </div>
    )
}

export default Notifications