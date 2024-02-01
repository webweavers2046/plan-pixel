import Container from "@/components/Common/Container/Container";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";

const GetUpdate = () => {
    return (
        <div className="container mx-auto py-4 xl:px-0 px-6 my-0 md:my-24">
            <div className="py-6">
                <SectionTitle
                    isSetWidth={true}
                    marginT={"12"}
                    title={"Get upcoming update to your inbox"}
                />
                <form className="md:flex items-center justify-center">
                    <input
                        className="border-y  md:border-s border-black/30  md:border-x-0 border-x rounded-br-2xl py-4 px-3 md:max-w-72 w-full placeholder:font-semibold focus:outline-green-400 "
                        placeholder="Your Name"
                        type="text"
                    />
                    <input
                        className="border-y  md:border-s border-black/30 rounded-br-2xl md:border-x-0 border-x  py-4 px-3 md:w-96 w-full placeholder:font-semibold focus:outline-green-400"
                        placeholder="Your Email"
                        type="email"
                    />
                    <button className="px-16 py-[17px] md:w-auto w-full bg-gradient-to-r from-[#50B577] to-[#93C648] text-white text-bold rounded-br-2xl hover:bg-green-400">
                        <span className="p-1">Subscribe</span>
                    </button>
                </form>
            </div>
        </div>
    );
};
export default GetUpdate;
