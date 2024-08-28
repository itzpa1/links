import React from 'react'
import Header from './components/Header/Header'
import LongBar from './components/LongBar/LongBar'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import { bar_data } from './assets/assets'

const App = () => {
  return (
    <div id='app' className='w-full flex items-center justify-center poppins '>
      <div className="container w-[580px] h-auto flex flex-col items-center gap-4 ">
        <Header />
        <Card />
        {bar_data.map((items, index) => (
          <LongBar data={items} key={index} />
        ))}
        <Footer />
      </div>
    </div>
  )
}

export default App
