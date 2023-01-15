import React from 'react'
import ProductCarousel from '../Components/ProductCarousel'
import ValentineCarousel from '../Components/ValentineCarousel'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'
import Products from '../Components/Products'

const HomeScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Elite Equipment' />
      <Fade up>
        {/* <ProductCarousel /> */}
        <ValentineCarousel />
      </Fade>
      <Products />
      <Fade up>
        <Contact className='mt-20' />
      </Fade>
    </div>
  )
}

export default HomeScreen
