import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import { Provider } from './components/Context'
import { useEffect, useState } from 'react'
import { socket } from './components/Context'

// const socket = io('http://localhost:5000')

type userData = {
  id: string
  count: number
}

const App = () => {
  // connected users array from server
  const [users, setUsers] = useState([] as userData[])

  // socket connection
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('users_updated', (usersList: userData[]) => {
      setUsers(usersList)
      console.log(usersList.length)
    })
  // socket.on('user_left', (userId) => {
  //   let newUsers = users.filter((user: any) => user !== userId)
  //   setUsers(newUsers)
  // })
  }, [users])

  return (
    <div className='grid grid-cols-4 gap-2 place-items-center'>
      {/* <div>
        <Provider>
          <Navbar/>
          <Buttons/>
        </Provider>
      </div> */}
      {
        users.map((index: userData) => {
          return (
            <div key={index.id}>
              <Provider currentCount={index.count}>
                <Navbar count={index.count}/>
                <Buttons/>
              </Provider>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default App
