"use client"

const MenuTitle = ({isOpenMenu}) => {
  return (
      
    <div className={`pl-3 sm:pl-6 delay-1000 absolute top-5 ${isOpenMenu?"block opacity-100":"hidden opacity-0"} transform transition flex  `}>
      <div className="h-3 w-3 mt-1 mr-2 rounded-full bg-primary"></div>
      <div>
      <h1 className="test-2xl font-bold mb-[8px]"> PlanPixel</h1>
      <p className="text-[#9a9a9a] text-[14px]">Creative simplicity</p>

      </div>
    </div>
  );
};

export default MenuTitle;
