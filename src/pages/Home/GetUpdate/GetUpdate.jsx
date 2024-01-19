import Container from "@/components/Common/Container/Container";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";

const GetUpdate = () => {

    return (
      <Container marginT={"28"}>
        <SectionTitle
          isSetWidth={true}
          marginT={'12'}
          title={"Get upcoming update to your inbox"}
        />
        <form className="flex items-center justify-center">
          <input
            className="border-l-2  border-b-2  border-t-2  py-4 px-3 max-w-72 placeholder:font-semibold focus:outline-green-400 "
            placeholder="Your Name"
            type="text"
          />
          <input
            className="border-l-2 border-b-2 border-t-2  py-4 px-3 lg:w-96 placeholder:font-semibold focus:outline-green-400"
            placeholder="Your Email"
            type="email"
          />
          <button className="px-4 py-4 bg-green-500 text-xl text-white text-bold rounded-r hover:bg-green-400">
            Subscribe
          </button>
        </form>
      </Container>
    );
};
export default GetUpdate;