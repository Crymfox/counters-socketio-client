import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import { Provider } from './components/Context'
import { useEffect } from 'react'
import io from 'socket.io-client'

const App = () => {
  
  useEffect(() => {
    const socket = io('http://localhost:5000')
  }, [])

  return (
    <div className='grid grid-cols-4 gap-2 place-items-center'>
      <div>
        <Provider>
          <Navbar/>
          <Buttons/>
        </Provider>
      </div>
    </div>
  )
}

export default App
