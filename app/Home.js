import React, { Component } from 'react'
import Header from './Header.js'
import MainSection from './MainSection.js'
import Footer from './footer.js'
import './Home.scss'
class Home extends Component {
  render() {
    return (
        <div>	
	       <Header/>
	       <MainSection/>
	       <Footer/>
       </div>
    )
  }
}
export default Home