import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "../index.css";
import portfolioPage from '../Assets/portfolioPageSample.png';
import plauderPinguin from '../Assets/plauderPinguinConvo.png';
import escapeToDubai from '../Assets/escapeToDubai.png';

function Projekte() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById('projekte');
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div id="projekte" className="flex flex-col items-center text-center mt-20 z-50 lg:ml-64 lg:mt-60 lg:space-x-10 bg-gray-dark">
      <div id="aboutMe" className="mx-10 text-gray-light lg:my-10">
        <p className="text-4xl mt-5">Projekte</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mx-10 my-10">
        {['Jan Frey Lexikon', 'PlauderPinguin', 'Escape to Dubai'].map((title, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}  // Startposition: unterhalb des Sichtfelds
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Endposition: im Sichtfeld
            transition={{ duration: 0.6, delay: index * 0.2 }} // Zeit und Verzögerung der Animation
            className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-300 duration-200 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="italic font-light">
                {title === 'Jan Frey Lexikon'
                  ? 'Eine Portfolio-Seite'
                  : title === 'PlauderPinguin'
                  ? 'Eine online Chat-App'
                  : 'Ein simples 2D Jump and Run Spiel'}
              </p>
              <img
                src={
                  title === 'Jan Frey Lexikon'
                    ? portfolioPage
                    : title === 'PlauderPinguin'
                    ? plauderPinguin
                    : escapeToDubai
                }
                alt={`Projekt ${index + 1}`}
                className="w-full object-cover mb-4 rounded-lg mt-5"
              />
              <p>
                {title === 'Jan Frey Lexikon'
                  ? 'Die Webseite "Jan Frey Lexikon" ist die erste Version meiner Portfolio-Seite, die ich mit React und Tailwind CSS entwickelt habe. Auf der Seite finden Besucher verschiedene Bereiche, die meine Arbeit und meinen Werdegang präsentieren. Dazu gehören eine Startseite (Home), eine Lebenslauf-Seite, die einen Überblick über meinen beruflichen Hintergrund bietet, eine About Me-Sektion, in der ich mich vorstelle, sowie eine Projekte-Seite, auf der meine bisherigen Arbeiten und Projekte zu sehen sind. Über den Bereich Kontakt können Interessierte unkompliziert mit mir in Verbindung treten. Durch dieses Projekt konnte ich meine React-Kenntnisse weiter vertiefen und habe zum ersten Mal die Möglichkeiten von Tailwind CSS genutzt, um ein modernes und ansprechendes Design umzusetzen.'
                  : title === 'PlauderPinguin'
                  ? 'PlauderPinguin ist eine Web-Chat-Anwendung, die Nutzern eine einfache Möglichkeit bietet, miteinander zu kommunizieren. Um den Dienst nutzen zu können, müssen sich Benutzer zunächst registrieren und dann anmelden, um mit anderen zu chatten. Das Backend basiert auf einer ASP.NET Core-Web-API, die eine reibungslose Datenverarbeitung ermöglicht, während das Frontend mit React.js und Vanilla CSS gestaltet wurde. Durch die Arbeit an PlauderPinguin konnte ich meine Fähigkeiten in ASP.NET Core, React.js und der Umsetzung benutzerfreundlicher Designs mit Vanilla CSS deutlich verbessern.'
                  : 'Escape to Dubai ist ein 2D-Jump-and-Run-Spiel in Unity. Das Ziel ist es, mit dem Charakter drei verschiedene Levels zu überstehen. Diese Levels bieten unterschiedliche Szenerien: angefangen bei einem Bahnhof, über einen Flughafen bis hin zu Dubai selbst. Ausserdem bietet Escape to Dubai einen Levelselector und einen Start-Screen. Das Spiel wurde mit Hilfe von Unity-Presets und C# programmiert.'}
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  window.open(
                    title === 'Jan Frey Lexikon'
                      ? 'https://github.com/xBl0oM/Portfolio-Site'
                      : title === 'PlauderPinguin'
                      ? 'https://github.com/xBl0oM/PlauderPinguin'
                      : 'https://github.com/xBl0oM/Escape-to-Dubai',
                    '_blank'
                  )
                }
                className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 duration-300"
              >
                Zum Code
              </button>
              {title === 'Jan Frey Lexikon' && (
                <button
                  onClick={() =>
                    window.open('https://jan-frey.netlify.app/', '_blank')
                  }
                  className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 duration-300 ml-4"
                >
                  Zur Webseite
                </button>
              )}
              {title === 'PlauderPinguin' && (
                <button
                  onClick={() =>
                    window.open('https://youtu.be/JGU2SOT_4SQ', '_blank')
                  }
                  className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 duration-300 ml-4"
                >
                  Zum Video
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projekte;
