import React from 'react';
import "../index.css";

function AboutMe() {
  return (
    <div id="überMich" className="flex flex-col items-center text-center mt-20 z-50 lg:flex-col lg:ml-64 lg:items-center lg:text-left lg:mt-60 lg:space-x-10 bg-fixed lg:bg-parallax bg-parallax-2 bg-cover">
      <div className="mx-10 my-10 bg-gray-600 bg-opacity-80 rounded-lg shadow-lg text-gray-light p-5 hover:shadow-xl hover:bg-gray-700 hover:bg-opacity-90 duration-500 hover:scale-105">
        <p className="text-4xl">Wer ist Jan Frey?</p>
        <table className="w-full mt-5 text-xl">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Name:</td>
              <td className="py-2">Frey</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Vorname:</td>
              <td className="py-2">Jan Alexander</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Alter:</td>
              <td className="py-2">18</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Geburtstag:</td>
              <td className="py-2">15.05.2006</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Grösse:</td>
              <td className="py-2">187cm</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Ausbildung:</td>
              <td className="py-2">Informatiker EFZ in Ausbildung an der Informatikmittelschule Aarau</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Adresse:</td>
              <td className="py-2">Krümblerweg 6, 5103 Möriken</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 font-semibold">Telefon:</td>
              <td className="py-2">076 414 51 03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AboutMe;