const Container = ({ children, marginTop, marginBottom }) => {
  return (
    <section
      className={`container  px-5 lg:px-0
         md:mx-auto`}
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      {children}
    </section>
  );
};
export default Container;
