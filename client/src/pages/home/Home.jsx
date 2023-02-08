import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured.jsx'
import './home.css'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className='homeContainer'>
    <Featured/>
    <h1 className="homeTitle">Browse by property type</h1>
    <PropertyList/>
    <h1 className="homeTitle">Home guests love</h1>
     <FeaturedProperties />
     <MailList/>
     <Footer/>
    </div>
   
     
    </div>
  )
}

export default Home