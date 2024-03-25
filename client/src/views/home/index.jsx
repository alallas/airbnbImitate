import React, { memo } from 'react'
import HomeBanner from '../../components/home-banner'
import { HomeWrapper } from './style'
import HomeList from '../../components/home-list'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='home-main'>
        <HomeList/>
      </div>
    </HomeWrapper>
  )
})

export default Home