import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Kenntnisse from './Components/Kenntnisse';

class App extends Component {
    render() { 
      return (
       <div className="">
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Kenntnisse/>

       </div>
      )
    }
}
  
export default App;
 