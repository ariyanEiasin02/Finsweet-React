import React from 'react'
import Banner from '../../components/Banner/Banner'
import Work from '../../components/Work/Work'
import Porject from '../../components/Project/Porject'
import Features from '../../components/Features/Features'
import Clients from '../../components/Clients/Clients'
import Frequently from '../../components/Frequently/Frequently'
import Websites from '../../components/Websites/Websites '
import Blog from '../../components/Blog/Blog'

const Home = () => {
  return (
    <div active="Home" className='md:py-0 pt-16'>
        <Banner></Banner>
        <Work></Work>
        <Porject></Porject>
        <Features></Features>
        <Clients></Clients>
        <Frequently></Frequently>
        <Websites></Websites>
        <Blog></Blog>
    </div>
  )
}

export default Home