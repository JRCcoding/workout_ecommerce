import React from 'react'
import { Card, Container } from 'react-bootstrap'
import '../Styles/SellingPoints.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SellingPoints = () => {
  return (
    <Container className='card_container'>
      <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
        <Card className='about_card'>
          <Card.Body className='bg-Accent about_card_body'>
            <h1 className='card_title'>Cakes</h1>
            <p className='card_text font-Multi text-AccentText'>
              Simple cakes to fully customized, contact me below to talk about
              pricing and work with your budget!
            </p>
          </Card.Body>
        </Card>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce='true'>
        <Card className='about_card_reverse'>
          <Card.Body className='bg-Accent about_card_body_reverse'>
            <h1 className='card_title_reverse'>Snacks</h1>
            <p className='card_text_reverse text-AccentText font-Multi'>
              Huge variety of snacks from Gummies to Kickin' Munchy Mix.
            </p>
          </Card.Body>
        </Card>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
        <Card className='about_card'>
          <Card.Body className='bg-Accent about_card_body'>
            <h1 className='card_title'>Catering</h1>
            <p className='card_text text-AccentText font-Multi'>
              From small meetings to all out bashes, I can help you make your
              occassion that much more special.
            </p>
          </Card.Body>
        </Card>
      </AnimationOnScroll>
    </Container>
  )
}

export default SellingPoints
