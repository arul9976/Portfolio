import React, { useState, useEffect } from 'react';

const CodeWars3KyuRank = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const logoUrl = "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/224027/cw-512-12b281b9-f8a8-4512-9050-dcc2a2c7bb89.png";

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 800);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const animateProgress = () => {
        setProgress(prev => {
          if (prev < 65) return prev + 1;
          return prev;
        });
      };

      const progressInterval = setInterval(animateProgress, 20);
      return () => clearInterval(progressInterval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  const codeWar = async () => {
    try {
      const res = await fetch("https://www.codewars.com/users/Arulkumar%20M/badges/large", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("image")) {
        console.log("Received image, not JSON.");
        // const imageBlob = await res.blob();
        // const imageUrl = URL.createObjectURL(imageBlob);
        // const imageElement = document.createElement("img");
        // imageElement.src = imageUrl;
        document.body.appendChild(imageElement);
      } else {
        const data = await res.json();
        console.log(data);
      }

    } catch (err) {
      console.log("Error:", err);
    }
  };


  useEffect(() => {
    codeWar()
  }, [])

  return (
    <div className="flex items-center justify-center h-max min-h-[100px] p-4">
      <div
        className={`w-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${isAnimating ? 'scale-105' : 'scale-100'}`}
      >

        <div className="bg-gray-800 p-2 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-lg">CodeWars</span>
            {/* <span className="text-blue-500 font-bold">3 kyu</span> */}
          </div>
        </div>

        <div className="p-2 flex flex-col items-center">
          <div className="relative w-24 h-24 mb-1">
            <div
              className={`absolute inset-0 border-1 border-color-[#00cba9] rounded-full transition-all duration-300 ${isAnimating ? 'opacity-90' : 'opacity-80'}`}

            ></div>

            <div className="absolute inset-0 flex items-center justify-center p-2">
              <img
                src={logoUrl}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* <div
              className="absolute inset-0 border-2 border-white opacity-30"
              style={{
                animation: 'spin 8s linear infinite'
              }}
            ></div> */}
          </div>

          <div className="text-center mb-2">
            <h3 className="text-xl font-bold text-blue-500">3 kyu</h3>
            {/* <p className="text-gray-400 text-sm">Competent</p> */}
          </div>

          <div className="w-full bg-gray-800 rounded-lg p-4 flex justify-between items-center mb-2">
            <div>
              <div className="text-white text-sm font-medium">Rank</div>
              <div className="text-blue-500 font-bold text-lg">3 Kyu</div>
            </div>
            <div>
              <div className="text-white text-sm font-medium">Score</div>
              <div className="text-yellow-500 font-bold text-lg animate-pulse">1547</div>
            </div>
            <div>
              <div className="text-white text-sm font-medium">Kata</div>
              <div className="text-green-500 font-bold text-lg">1279</div>
            </div>
          </div>

          {/* <div className="w-full mb-2">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>3 kyu</span>
              <span>2 kyu</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-end mt-1">
              <span className="text-xs text-gray-400">{progress}% to next rank</span>
            </div>
          </div> */}
        </div>

        <div className="bg-gray-800 p-3 border-t border-gray-700 flex justify-center">
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
            onClick={() => { setIsAnimating(true); window.open("https://www.codewars.com/users/Arulkumar%20M/stats", "_blank") }}
            onMouseLeave={() => setTimeout(() => setIsAnimating(false), 300)}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeWars3KyuRank;