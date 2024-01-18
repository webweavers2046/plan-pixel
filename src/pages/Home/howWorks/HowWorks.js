import Container from "@/components/Common/Container/Container";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";

const HowWorks = () => {
    return (
      <Container>
        <SectionTitle
          className="my-28"
          fixW={true}
          title={"How It Works & Get Best Output"}
        />
        <div className="flex items-center justify-center  gap-2">
          <span className="bg-[#FBBC05] px-3 py-1 text-white rounded-full">
            1
          </span>
          <span className="border-t border-2 border-dashed border-black flex-grow"></span>
          <span className="bg-[#93C648] px-3 py-1 text-white rounded-full">
            2
          </span>
          <span className="border-t border-2 border-dashed border-black flex-grow"></span>
          <span className="bg-[#50B577] px-3 py-1 text-white rounded-full">
            3
          </span>
          <span className="border-t border-2 border-dashed border-black flex-grow"></span>
        </div>
        {/* divider */}

        <div className="flex items-center justify-between gap-5 mt-10">
          {/* card */}
          <div className="">
            <h3 className="text-4xl">Sign Up or Log In</h3>
            <p className="text-xl mt-6">
              Begin your journey by signing up for a new account or logging in
              if you're already a member.
            </p>
          </div>
          {/* card */}
          <div className="">
            <h3 className="text-4xl">Personalized Dashboard Overview</h3>
            <p className="text-xl mt-6">
              Navigate effortlessly through different sections to gain
              comprehensive insights into your work.
            </p>
          </div>
          {/* card */}
          <div className="">
            <h3 className="text-4xl">Dynamic Task Organization</h3>
            <p className="text-xl mt-6">
              Enhance organization by assigning labels or tags, allowing for
              quick filtering and sorting.
            </p>
          </div>
        </div>
      </Container>
    );
};
export default HowWorks;