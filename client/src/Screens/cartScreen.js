import React from 'react'
import { Fade } from 'react-reveal'
import Cart from '../Components/Cart'
import Meta from '../Components/Meta'

const cartScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Elite Shopping Cart' />
      <Fade up>
        <Cart />
      </Fade>
    </div>
  )
}

export default cartScreen
