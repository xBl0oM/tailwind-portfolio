import React, { useEffect, useRef, useState } from 'react';
import "../index.css";
import animatedBg from '../Assets/animated-Bg.mp4'

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="relative flex flex-col items-center justify-center text-center p-20 lg:space-x-10 lg:ml-64 bg-fixed bg-cover overflow-hidden"
    >
      <video
        src={animatedBg}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10">
        <div className={`text-white mb-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <p className="text-xl lg:text-2xl">Connect with me on social media:</p>
        </div>
        <div className="flex space-x-12 mb-8">
          <a
            href="https://github.com/xBl0oM"
            className={`transition-transform transform hover:scale-110 hover:text-gray-800 duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-12 h-12 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 0 1 6 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.218.694.825.577 4.765-1.589 8.198-6.084 8.198-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jan-frey-02246331b/"
            className={`transition-transform transform hover:scale-110 hover:text-gray-800 duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-12 h-12 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.939v5.666H9.355V9h3.415v1.561h.049c.475-.898 1.637-1.848 3.368-1.848 3.601 0 4.266 2.369 4.266 5.455v6.284zM5.337 7.433c-1.144 0-2.07-.929-2.07-2.073 0-1.145.926-2.073 2.07-2.073s2.073.928 2.073 2.073c0 1.144-.929 2.073-2.073 2.073zm1.772 13.019H3.564V9h3.545v11.452zM22.225 0H1.771C.79 0 0 .771 0 1.729v20.542C0 23.229.79 24 1.771 24h20.451C23.209 24 24 23.229 24 22.271V1.729C24 .771 23.209 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:business.janfrey@gmail.com"
            className={`transition-transform transform hover:scale-110 hover:text-gray-800 duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
          >
            <svg
              className="w-12 h-12 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l11.985-7.714v13.385h-23.97v-13.385l11.985 7.714zm0-1.426l-11.985-7.713h23.97l-11.985 7.713z" />
            </svg>
          </a>
        </div>
        <p className={`text-white text-lg mt-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          © 2024 Jan Frey. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
