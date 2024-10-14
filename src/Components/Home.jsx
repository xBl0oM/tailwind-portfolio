import React from 'react';
import "../index.css";
import portfolioMain from '../Assets/portfolioMain.jpeg';

function Home() {
  return (
    <div  className="flex flex-col items-center text-center mt-20 z-50 lg:flex-row lg:ml-64 lg:items-start lg:text-left lg:mt-32 lg:space-x-10 " >
     
      <div id="home" className="lg:w-1/2 lg:pr-10 lg:ml-20 lg:items lg:my-36">
        <p className="text-2xl font-medium text-blue-800 ">Grüezi, mein Name ist</p>
        <p className="text-4xl lg:text-6xl text-slate-900 font-bold">Jan Alexander Frey</p>
        <p className="text-2xl font-light">Schnell im Sport und im Programmieren</p>
      </div>

      <div className="lg:w-1/2 lg:flex lg:justify-start">
        <img src={portfolioMain} alt="Me" className="rounded-lg w-80 mt-5 lg:w-96 lg:max-w-md lg:my-0 lg:mr-20"/>
      </div>
    </div>
  );
}

export default Home;
