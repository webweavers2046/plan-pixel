const SectionTitle = ({ title, isSetWidth, marginT, marginB }) => {
  // isSetWidth for control title break down
  return (
    <div className="text-center mb-10">
      <h1
        className={`font-bold md:text-4xl text-2xl md:leading-[42px]
        ${marginT && `my-${marginT}`}
        ${marginB && `my-${marginB}`}
         ${isSetWidth ? "max-w-[400px] mx-auto" : ""}`}
      >
        {title}
      </h1>
    </div>
  );
};
export default SectionTitle;