import { useEffect, useState } from "react";

const Stopwatch = ({ taskTimeStamp }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    // If taskTimeStamp is provided, start the stopwatch
    if (taskTimeStamp) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);

      // Calculate initial time difference
      const date1 = new Date(taskTimeStamp);
      const date2 = new Date();
      const timeDifferenceMs = Math.abs(date1.getTime() - date2.getTime());
      setTime(Math.floor(timeDifferenceMs / 1000));
    }

    // Cleanup function to clear interval when component unmounts or when taskTimeStamp changes
    return () => clearInterval(intervalId);
  }, [taskTimeStamp]);

  // Format time into HH:mm:ss format
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <p className="text-[#93C648] font-extrabold text-sm">{formatTime()}</p>
  );
};

export default Stopwatch;
