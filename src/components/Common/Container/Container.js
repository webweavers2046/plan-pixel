const Container = ({children,marginY}) => {
    return (
      <section className={`container px-5 lg:px-0 my-${marginY} md:mx-auto`}>
        {children}
      </section>
    );
};
export default Container;