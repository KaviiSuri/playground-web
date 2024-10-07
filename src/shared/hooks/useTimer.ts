import { useState, useEffect } from 'react';

export const useTimer = (timeInSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(timeInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    timeLeft,
  };
};
