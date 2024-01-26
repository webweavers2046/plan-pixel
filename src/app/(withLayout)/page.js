import Articles from "@/components/Home/Articles/Articles";
import OurCompany from "@/components/Home/Company/OurCompany";
import GetUpdate from "@/components/Home/GetUpdate/GetUpdate";
import Header from "@/components/Home/Header/Header";
import KeyFeatures from "@/components/Home/KeyFeature/KeyFeatures";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import HowWorks from "@/components/Home/howWorks/HowWorks";

export default function Home() {
    return (
        <main className="">
            <Header />
            <OurCompany />
            <KeyFeatures />
            <HowWorks />
            <Testimonial />
            <GetUpdate />
            <Articles />
        </main>
    );
}
