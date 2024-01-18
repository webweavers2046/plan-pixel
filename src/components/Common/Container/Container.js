const Container = ({ children, marginY, marginT, marginB }) => {
  return (
    <section
      className={`container  px-5 lg:px-0 
        ${marginY && `my-${marginY}`} 
        ${marginT && `my-${marginT}`}
        ${marginB && `my-${marginB}`}
         md:mx-auto`}
    >
      {children}
    </section>
  );
};
export default Container;