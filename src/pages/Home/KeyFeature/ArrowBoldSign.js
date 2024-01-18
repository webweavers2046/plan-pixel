import React from 'react';

const ArrowBoldSign = ({leftSpace}) => {
      return (
            <div className={`hidden md:flex w-[1000px] bottom-1/2 ${leftSpace}  absolute bg-[gray] h-1 items-center`}>
              <div className='w-4 h-4 absolute bg-[gray] rounded-full -right-2'></div>
            </div>
      );
};

export default ArrowBoldSign;