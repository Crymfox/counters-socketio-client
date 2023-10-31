import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import { Provider } from './components/Context'
import { DialogHTMLAttributes, useEffect, useState } from 'react'
import { socket } from './components/Context'
import Notifications from './components/Notifications'
import useDialog from './hooks/useDialog'

// const socket = io('http://localhost:5000')

type userData = {
  id: string,
  count: number,
  requests: string[],
  admins: string[],
  access: string[]
}

const App = () => {
  // connected users array from server
  const [users, setUsers] = useState([] as userData[])
  // socket connection
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected')
      console.log(socket.id)
    })
    socket.on('users_updated', (usersList: userData[]) => {
      setUsers(usersList)
      // console.log(usersList.length)
    })
  // socket.on('user_left', (userId) => {
  //   let newUsers = users.filter((user: any) => user !== userId)
  //   setUsers(newUsers)
  // })
    
  }, [users])

  const { openDialog, closeDialog } = useDialog()

  return (
    <div className='grid grid-cols-4 gap-2 place-items-center'>
      {/* <div>
        <Provider>
          <Navbar/>
          <Buttons/>
        </Provider>
      </div> */}
      
      <Notifications open={openDialog} close={closeDialog} users={users} socket={socket} />
      {
        users.map((index: userData, key) => {
          return (  
            <div key={index.id} className={`${socket.id == index.id ? "ring-lime-500" : "ring-slate-400"} ring-4 m-2 p-1 hover:shadow-2xl relative`}>
              <button className={`
                text-lg
                text-white
                text-center w-full
                disabled:bg-slate-400
                disabled:cursor-not-allowed
                bg-emerald-600
              `} disabled={index.access.includes(socket.id)} onClick={() => {socket.emit('request_access', {socketId: socket.id, key: key})}}>Request Access</button>
              <Provider index={key} current={index.count}>
                <Navbar count={index.count}/>
                <Buttons current={index.count} accessible={index.access.includes(socket.id)}/>
              </Provider>
              <h1 className='
                text-xs
                font-bold
                left-0
                w-full
                grid place-items-center
                text-slate-800
                rounded-lg
                p-2
                absolute
              '>User {key}</h1>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default App
