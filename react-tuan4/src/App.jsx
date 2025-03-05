import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Home Your Recipe</p>
      </div>
      <div>
        <h1>Emma Gonzalez's Recipe Box</h1>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            Emma Gobnzalez is a deputy editor at Cheftify. bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an ...
          </div>
        </div>
      </div>
    </>
  )
}

export default App
