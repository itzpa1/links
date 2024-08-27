import React from 'react'
import Header from './components/Header/Header'
import LongBar from './components/LongBar/LongBar'
import Card from './components/Card/Card'

const App = () => {
  return (
    <div id='app' className='w-full h-screen flex flex-col gap-4 items-center poppins '>
      <Header />
      <LongBar />
      <Card />
    </div>
  )
}

export default App
