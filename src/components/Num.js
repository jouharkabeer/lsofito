import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const AchievementsSection = () => {
  const achievementsData = [
    { number: 7, symbol: "+", tagline: "Years of Experience" },
    { number: 100, symbol: "+", tagline: "Proffesinals Build" },
    { number: 10, symbol: "+", tagline: "Technologies" },
  ];

  return (
    <div className="animationnumber">
      {achievementsData.map((data, index) => (
        <div key={index}>
            <div className="numsym text-lsofito-blue font-semibold">
          <AnimatedNumbers
            includeComma
            animateToNumber={data.number}
            
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
            ]}
          />
          <span>{data.symbol}</span>
          </div>
          <p>{data.tagline}</p>
        </div>
      ))}
    </div>
  );
};

export default AchievementsSection;
