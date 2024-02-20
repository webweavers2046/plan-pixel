const CalculateCountdown = (endDate) => {
    const endDateTime = new Date(endDate).getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

export default CalculateCountdown;
