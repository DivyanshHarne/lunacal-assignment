import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutCard from './components/About'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-6 w-full' style={{background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)", minHeight:"100%", borderRadius:"0px"}}>
      {/* <AboutCard/> */}
      <Home/>
      </div>
    </>
  )
}

export default App
