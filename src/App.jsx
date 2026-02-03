import { useState } from 'react'
import storeImage from '/cute-storefront.jpg'
import Header from  './components/common/Header'
import './App.css'

function App() {
  return (
    <>
      <Header title={'Every Day Market'} />
      <div>        
         <img src={storeImage} alt="Cute Storefront Logo" />        
      </div>
    </>
  )
}

export default App
