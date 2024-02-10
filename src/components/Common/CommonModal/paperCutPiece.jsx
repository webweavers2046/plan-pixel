import React from 'react';

const PaperPieces = () => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];

  return (
    <div className="absolute top-0">
      {/* Set fixed positions for each paper piece */}
      <div className="w-11 h-5 opacity-10 top-0 relative rotate-12 left-16 bg-primary"></div>
      <div className="w-11 h-5 opacity-10 top-0 relative left-40 -rotate-45 bg-orange-400"></div>
      <div className="w-11 h-5 opacity-10 rotate-45 -top-24 relative left-52 bg-black"></div>
      <div className="w-11 h-5 opacity-10 -top-32 -rotate-6 relative left-32  bg-red-500"></div>
     
    </div>
  );
};

export default PaperPieces;