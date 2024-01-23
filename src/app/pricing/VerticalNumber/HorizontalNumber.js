

const VerticalNumber = ({num, color, verticalLine}) => {
    return (
        <div className="flex flex-col  items-center">
            <p className={`font-bold text-xl px-4 py-2 text-center bg-[#${color}] rounded-full`}>{num}</p>
            <p className={`bg-[#00000080] w-[2px] lg:h-32 md:h-40 h-52 ${verticalLine ? '' : 'hidden'}`}></p>
        </div>
    );
};

export default VerticalNumber;