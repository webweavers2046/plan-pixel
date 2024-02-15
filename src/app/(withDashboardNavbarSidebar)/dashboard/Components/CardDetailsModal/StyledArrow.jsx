import React from 'react';

const StyledArrow = () => {
    return (
        <div className='h-full flex gap-[3px] items-end'>
            <p className='h-7 w-7  border-l-2 border-b-2 border-[#50B577]'></p>
            <div className="w-[9px] h-[9px] bg-[#50B577] rounded-full -mb-[3px]"></div>
        </div>
    );
};

export default StyledArrow;