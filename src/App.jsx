import { useState } from 'react'
import Header from './Components/Header'
import CryptoTable from './Components/CryptoTable'

function App() {

  return (
    <div className='w-screen h-screen bg-[#1A1A1A] max-w-screen  text-[#FFFFFF] p-4'>
      <Header/>
      <CryptoTable/>
    </div>
  )
}

export default App
