import Container from "@/components/Common/Container/Container";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";

const GetUpdate = () => {
    return (
        <div className="container mx-auto py-4 xl:px-0 px-6 my-0 md:my-24">
            <div className="py-16">
                <SectionTitle
                    isSetWidth={true}
                    marginT={"12"}
                    title={"Get upcoming update to your inbox"}
                />
                <form className="md:flex items-center justify-center">
                    <input
                        className="border-y-2  md:border-s-2  md:border-x-0 border-x-2  py-3 px-3 md:max-w-72 w-full placeholder:font-semibold focus:outline-green-400 "
                        placeholder="Your Name"
                        type="text"
                    />
                    <input
                        className="border-y-2  md:border-s-2  md:border-x-0 border-x-2  py-3 px-3 md:w-96 w-full placeholder:font-semibold focus:outline-green-400"
                        placeholder="Your Email"
                        type="email"
                    />
                    <button className="px-10 py-3 md:w-auto w-full bg-gradient-to-r from-[#50B577] to-[#93C648] text-xl text-white text-bold md:rounded-r sm:rounded-md md:rounded-s-0 hover:bg-green-400">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};
export default GetUpdate;
