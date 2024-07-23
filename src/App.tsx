// import { useState } from 'react'
import './App.css'
import Crypto from './assets/crypto-school.png'

// import WebApp from '@twa-dev/sdk'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <img className='img' src={Crypto} alt="" />
      <div className="card">
        <a href="https://blofin.com/invite/test_tg_app">
          <button>
            Register
          </button>
        </a>
      </div>
      {/* <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div> */}
    </div>
  )
}

export default App
