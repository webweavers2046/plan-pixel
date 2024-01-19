const SectionTitle = ({ title, isSetWidth, marginT, marginB }) => {
  // isSetWidth for control title break down
  return (
    <div className="text-center my-10">
      <h1
        className={`text-4xl md:text-6xl font-bold 
        ${marginT && `my-${marginT}`}
        ${marginB && `my-${marginB}`}
         ${isSetWidth ? "max-w-xl mx-auto" : ""}`}
      >
        {title}
      </h1>
    </div>
  );
};
export default SectionTitle;