import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Kenntnisse from './Components/Kenntnisse'
import Projekte from './Components/Projekte'
import Sport from './Components/Sport'
import Kontakt from './Components/Kontakt';
import Footer from './Components/Footer'


class App extends Component {
    render() { 
      return (
       <div className="">
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Kenntnisse/>
            <Projekte/>
            <Sport/>
            <Kontakt/>
            <Footer/>
       </div>
      )
    }
}
  
export default App;
 