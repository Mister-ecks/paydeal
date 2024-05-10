import React from 'react'
import Metrics from './Metrics'
import Product from './Product'
import Offer from './Offers'

const Main = () => {
  return (
    <div className='md:bg-[#F1F1FF] bg-white'>
        <Metrics/>
        <Product/>
        <Offer/>
        
    </div>
  )
}

export default Main