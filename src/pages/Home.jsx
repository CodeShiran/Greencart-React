import React from 'react'
import MainBanner from '../context/MainBanner'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <Categories />
    </div>
  )
}

export default Home