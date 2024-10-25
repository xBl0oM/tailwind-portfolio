import React from 'react';
import "../index.css";

function Kontakt() {
  return (
    <div id="kontakt" className="flex flex-col items-center justify-center text-center mt-20 z-50 bg-gray-dark p-8 lg:pb-40 lg:space-x-10 lg:ml-64 ">
      
      <p className="text-4xl text-gray-light mb-10">Kontakt</p>
      
      <div className="flex flex-col lg:flex-row items-center justify-center text-center space-y-10 lg:space-y-0 lg:space-x-10">
        
        <button className="w-40 h-40 lg:w-60 lg:h-40 bg-slate-900 hover:bg-slate-950 duration-300 rounded-xl flex justify-center items-center">
          <a href="https://github.com/xBl0oM" className="flex items-center justify-center w-full h-full" target="_blank" rel="noopener noreferrer">
            <svg className="w-28 h-28  lg:w-28 lg:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.707 97.707" preserveAspectRatio="xMidYMid meet">
              <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
            </svg>
          </a>
        </button>

       
        <button className="w-40 h-40 lg:w-60 lg:h-40 bg-slate-900 hover:bg-slate-950 duration-300 rounded-xl flex justify-center items-center">
          <a href="https://www.linkedin.com/in/jan-frey-02246331b/" className="flex items-center justify-center w-full h-full" target="_blank" rel="noopener noreferrer">
            <svg className="w-28 h-28 lg:w-28 lg:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path fill="#fff" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>
        </button>

        
        <button className="w-40 h-40 lg:w-60 lg:h-40 bg-slate-900 hover:bg-slate-950 duration-300 rounded-xl flex justify-center items-center ">
          <a href="mailto:business.janfrey@gmail.com" className="flex items-center justify-center w-full h-full" target="_blank" rel="noopener noreferrer">
            <svg className="w-28 h-28 lg:w-28 lg:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path fill="#fff" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Kontakt;
