import { useState } from 'react'
import storeImage from '/cute-storefront.jpg'
import Header from  './components/common/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  /*
   <button class="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        */
  return (
    <>
      <Header />
      <div>        
         <img src={storeImage} alt="Cute Storefront Logo" />        
      </div>
    </>
  )
}

export default App
