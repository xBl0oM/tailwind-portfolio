import React, { useState, useEffect } from 'react';
import "../index.css";
import floorballGoal from '../Assets/floorballGoal.mp4';
import photo1 from '../Assets/uauBild_wide2.png'
import photo2 from '../Assets/uauBild.jpeg'
import photo3 from '../Assets/uauCupSpiel.jpeg'
import photo4 from '../Assets/uauMoM.jpeg'
import photo5 from '../Assets/uauPortrait2.jpeg'
import photo6 from '../Assets/uauTeamEdit.jpeg'
import photo7 from '../Assets/uauWalkInBack.jpeg'
import photo8 from '../Assets/teamPicture.jpg'

function Sport() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [items] = useState([
    { type: 'video', src: floorballGoal },
    { type: 'image', src: photo1 },
    { type: 'image', src: photo2 },
    { type: 'image', src: photo3 },
    { type: 'image', src: photo4 },
    { type: 'image', src: photo5 },
    { type: 'image', src: photo6 },
    { type: 'image', src: photo7 },
    { type: 'image', src: photo8 }
  ]);

  useEffect(() => {
    let timer;
    if (items[currentIndex].type === 'video' && isVideoPlaying) {
      timer = setTimeout(() => {
        setIsVideoPlaying(false);
      }, 10000); // Adjust duration as needed (milliseconds)
    } else if (!isVideoPlaying) {
      // Wait a moment before switching to the next item to ensure a smooth transition.
      timer = setTimeout(() => {
        nextItem();
      }, 500); // Adjust this delay as needed for smoothness
    } else {
      timer = setTimeout(() => {
        nextItem();
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isVideoPlaying, items]);

  const nextItem = () => {
    setIsVideoPlaying(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setIsVideoPlaying(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="sport" className="flex flex-col items-center text-center mt-5 lg:mt-20 z-50 lg:ml-64 lg:mt-5 lg:space-x-10">
      <div id="aboutMe" className="mx-10 lg:my-10 flex flex-col lg:flex-row lg:space-x-10">
        <div className="lg:w-1/2">
          <p className="text-4xl mb-5">Sport</p>
          <p>
            Seit ich sechs Jahre alt bin, spiele ich Unihockey. Für den Club Pauermäuse Brugg bestritt ich meine ersten Matches und fand schnell Spass am Ballsport. Nach einigen Jahren wechselte ich schliesslich zum 2. Ligisten Unihockey Aargau United, was meiner sportlichen Entwicklung enorm half. Nachdem ich die Stufen U14 bis U18 durchlaufen hatte, wurde ich aufgrund meiner Führungsqualitäten und des Respekts, den ich von meinen Mitspielern erhalten habe, Captain der U18 und Stammspieler in der U21. Ich entschloss mich, mein Können unter Beweis zu stellen und den Sprung in ein Team der obersten Schweizer Liga zu schaffen. Dieses Ziel habe ich erreicht und konnte zur Saison 2024-2025 zu Unihockey Basel Regio in die U21-A wechseln.
          </p>
        </div>
        <div className="mt-5 lg:mt-0 lg:w-1/2 relative h-64 lg:h-96">
          {items[currentIndex].type === 'video' && isVideoPlaying ? (
            <video
              autoPlay
              loop={false}
              muted
              src={items[currentIndex].src}
              className="w-full h-full object-cover rounded-lg"
              onEnded={() => setIsVideoPlaying(false)}
            />
          ) : (
            <img
              src={items[currentIndex].src}
              alt="Gallery item"
              className={`w-full h-full rounded-lg ${
                items[currentIndex].orientation === 'portrait' ? 'object-contain' : 'object-cover'
              }`}
            />
          )}
         <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-4">
            <button onClick={prevItem} className="bg-gray-700 text-white px-4 py-2 rounded-md">
              &lt; 
            </button>
            <button onClick={nextItem} className="bg-gray-700 text-white px-4 py-2 rounded-md">
              &gt; 
            </button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Sport;
