import React from 'react';
import "../index.css";
import portfolioMain from '../Assets/portfolioMain.jpeg';

function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-20 z-50 lg:flex-row lg:items-center lg:justify-center lg:text-left lg:mt-32 lg:space-x-10">
      <div className="lg:w-1/2">
        <p className="text-2xl font-medium text-blue-500 py-5">Grüezi, mein Name ist</p>
        <p className="text-5xl text-slate-900 font-bold">Jan Frey</p>
      </div>

      
      <div className="lg:w-2/2 ">
        <img src={portfolioMain} alt="Me" className="rounded-lg w-80 my-5 lg:w-full lg:max-w-md lg:my-0"/>
      </div>

      <div className="lg:w-1/2 lg:text-left">
        <p className="text-xl font-light">Schnell im Sport und im Programmieren</p>
        <p className="lg:w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt vero est voluptates nostrum possimus culpa molestiae, rem, velit porro delectus iure quibusdam accusantium eius nemo et sit illum quod.
        </p>
      </div>
    </div>
  );
}

export default Home;
