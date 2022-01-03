import { useState, useEffect } from "react";

const useCounter = (number = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + number);
    }, 1000);

    return () => clearInterval(interval);
  }, [number]);

  return counter;
};

export default useCounter;
