import Container from "@/components/Common/Container/Container";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";

const GetUpdate = () => {
    return (
        <Container marginBottom={"50px"} marginTop={"50px"}>
            <div className="py-16">
                <SectionTitle
                    isSetWidth={true}
                    marginT={"12"}
                    title={"Get upcoming update to your inbox"}
                />
                <form className="md:flex items-center justify-center">
                    <input
                        className="border-l-2  border-b-2  border-t-2  py-3 px-3 max-w-72 placeholder:font-semibold focus:outline-green-400 "
                        placeholder="Your Name"
                        type="text"
                    />
                    <input
                        className="border-l-2 border-b-2 border-t-2  py-3 px-3 lg:w-96 placeholder:font-semibold focus:outline-green-400"
                        placeholder="Your Email"
                        type="email"
                    />
                    <button className="px-10 py-3 bg-gradient-to-r from-[#50B577] to-[#93C648] text-xl text-white text-bold rounded-r hover:bg-green-400">
                        Subscribe
                    </button>
                </form>
            </div>
        </Container>
    );
};
export default GetUpdate;
