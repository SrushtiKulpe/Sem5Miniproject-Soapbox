import React from 'react'
import { Navbar } from './Navbar'
// import logo from '/images/logo.jpeg'

export const AboutUs = () => {
    return(
        <div>
            <Navbar/>
            <center><h1>About Us</h1></center>
            <div className='about'>
                <center>
                    {/* <img src={logo} alt="logo"> </img> */}
                </center>
            </div>
            <center> <p className='container'> Welcome to Soapbox.
            We make food for your skin! 
            <br/>Soapbox is a home grown Indian brand which aims at providing for all your skincare needs.
            We do make food for your skin, quite litterally! Our ingredients are sourced organically with delicious fruit oils and butters for deeply nourished
            and healthy skin. 
            <br/>Our wide variety of delicious soaps are one of a kind and are bound to leave you craving for more!. 
            </p>
            </center>
        </div>
    )
}

export default AboutUs 