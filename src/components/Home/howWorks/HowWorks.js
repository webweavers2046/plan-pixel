import Container from "@/components/Common/Container/Container";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";

const HowWorks = () => {
    return (
        <div className="container mx-auto md:px-24 px-2 my-10 md:mt-40 md:mb-48">
            <SectionTitle
                isSetWidth={true}
                title={"How It Works & Get Best Output"}
            />
            <div className="flex items-center justify-center  gap-2 mx-4 lg:mx-0">
                <span className="bg-[#FBBC05] px-3 py-1 text-white rounded-full">
                    1
                </span>
                <span className=" border-t-2 border-dashed border-black flex grow"></span>
                <span className="bg-[#93C648] px-3 py-1 text-white rounded-full">
                    2
                </span>
                <span className=" border-t-2 border-dashed border-black flex-grow"></span>
                <span className="bg-[#50B577] px-3 py-1 text-white rounded-full">
                    3
                </span>
                <span className=" border-t-2 border-dashed border-black flex-grow"></span>
            </div>
            {/* divider */}

            <div className="grid lg:grid-cols-3  gap-6 mt-10">
                {/* card */}
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};
export default HowWorks;

const Card = ({ title, description }) => (
    <div className="mx-4 lg:mx-0">
        <h3 className="text-2xl font-bold md:text-[25px]">{title}</h3>
        <p className="text-[16px] text-[#494949] mt-2 md:mt-3">{description}</p>
    </div>
);

const cardsData = [
    {
        title: "Sign Up or Log In",
        description:
            "Begin your journey by signing up for a new account or logging in if you're already a member.",
    },
    {
        title: "Personalized Dashboard Overview",
        description:
            "Navigate effortlessly through different sections to gain comprehensive insights into your work.",
    },
    {
        title: "Dynamic Task Organization",
        description:
            "Enhance organization by assigning labels or tags, allowing for quick filtering and sorting.",
    },
];
