import React, { useState, useEffect } from 'react';
import Svg, { Circle } from 'react-native-svg';
import colors from '../utils/colors';

const CircleCountdown = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  const radius = 18; // Adjust the radius to your desired size
  const circumference = 2 * Math.PI * radius;
  const progress = (duration - timeLeft) / duration;

  return (
    
      <Svg height={40} width={40} style={{
        
      }}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={colors.appWhite}
          strokeWidth="3" // Adjust the strokeWidth to your desired thickness
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={colors.appGreen}
          strokeWidth="3" // Adjust the strokeWidth to your desired thickness
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - progress * circumference}
        />
      </Svg>
    
  );
};

export default CircleCountdown;

