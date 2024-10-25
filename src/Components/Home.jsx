import React, { useEffect, useState } from 'react';
import "../index.css";
import portfolioMain from '../Assets/portfolioMain.jpeg';

function Home() {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [imageVisible, setImageVisible] = useState(false);

  const greetingText = 'Grüezi, mein Name ist';
  const nameText = 'Jan Alexander Frey';
  const sloganText = 'Schnell im Sport und im Programmieren';

  useEffect(() => {
    // Typing effect for the greeting text
    if (greeting.length < greetingText.length) {
      const timer = setTimeout(() => {
        setGreeting(greeting + greetingText[greeting.length]);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Start showing the image as soon as the greeting is done
      setImageVisible(true);
    }

    // Typing effect for the name after greeting is done
    if (greeting.length === greetingText.length && name.length < nameText.length) {
      const timer = setTimeout(() => {
        setName(name + nameText[name.length]);
      }, 100);
      return () => clearTimeout(timer);
    }

    // Typing effect for the slogan after the name is done
    if (name.length === nameText.length && slogan.length < sloganText.length) {
      const timer = setTimeout(() => {
        setSlogan(slogan + sloganText[slogan.length]);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [greeting, name, slogan]);

  return (
    <div id="home" className="flex flex-col items-center text-center mt-20 z-50 lg:flex-row lg:ml-64 lg:items-start lg:text-left lg:mt-32 lg:space-x-10 lg:mb-[20rem]">
      <div  className="lg:w-1/2 lg:pr-10 lg:ml-20 lg:my-36">
        <p className="text-3xl font-medium text-blue-800">
          {greeting}
         
          {greeting.length < greetingText.length && <span className="animate-blink">|</span>}
        </p>
        <p className="text-4xl lg:text-6xl text-slate-900 font-bold">
          {name}
         
          {greeting.length === greetingText.length && name.length < nameText.length && (
            <span className="animate-blink">|</span>
          )}
        </p>
        <p className="text-2xl font-light">
          {slogan}
          {name.length === nameText.length && slogan.length < sloganText.length && (
            <span className="animate-blink">|</span>
          )}
        </p>
      </div>

      <div className={`lg:w-1/2 lg:flex lg:justify-start transition-opacity duration-[2000ms] ${imageVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img src={portfolioMain} alt="Me" className="rounded-lg w-80 mt-5 lg:w-96 lg:max-w-md lg:my-0 lg:mr-20"/>
      </div>
    </div>
  );
}

export default Home;
