"use client";

import { useState, useEffect } from "react";

const useIncrementingNumber = (initialValue) => {
    const [number, setNumber] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            if (number < 64) {
                setNumber((prevNumber) => prevNumber + 1);
            }
        }, 100); // Change the interval as per your requirement

        return () => clearInterval(interval);
    }, [number]);

    return number;
};

export default useIncrementingNumber;
