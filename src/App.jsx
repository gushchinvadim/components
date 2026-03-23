// import { useState } from 'react'

import { ShopItemClass } from './components/ShopItemClass/ShopItemClass'
import { ShopItemFunc } from './components/ShopItemFunc/ShopItemFunc'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <div className="container">
      <div className="background-element"></div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />     
      {/* React-компонент ShopItemFunc (функциональный компонент) */}

      {/* <ShopItemClass item={item} />     */}
      {/* React-компонент ShopItemClass (class-based компонент) */}
    
    </div>
  </div>
    </>
  )
}

export default App
