const SectionTitle = ({ title, isSetWidth, marginT, marginB }) => {
    // isSetWidth for control title break down
    return (
        <div className="text-center mb-10">
            <h1
                className={`lg:text-6xl md:text-5xl text-2xl text-center font-semibold md:mb-16 mb-2 md:leading-[42px]
        ${marginT && `my-${marginT}`}
        ${marginB && `my-${marginB}`}
         ${isSetWidth ? "max-w-[600px] mx-auto" : ""}`}
            >
                {title}
            </h1>
        </div>
    );
};
export default SectionTitle;
