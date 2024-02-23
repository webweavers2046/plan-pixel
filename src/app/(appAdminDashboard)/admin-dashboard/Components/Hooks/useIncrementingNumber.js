"use client";

import { useState, useEffect } from "react";

const useIncrementingNumber = (initialValue) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (number < initialValue) {
                setNumber((prevNumber) => prevNumber + 1);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [number, initialValue]);

    return number;
};

export default useIncrementingNumber;
