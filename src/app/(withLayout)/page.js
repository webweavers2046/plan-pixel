import Articles from "@/components/Home/Articles/Articles";
import OurCompany from "@/components/Home/Company/OurCompany";
import Features from "@/components/Home/Features/Features";
import GetUpdate from "@/components/Home/GetUpdate/GetUpdate";
import Header from "@/components/Home/Header/Header";
import KeyFeatures from "@/components/Home/KeyFeature/KeyFeatures";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import HowWorks from "@/components/Home/howWorks/HowWorks";
import Message from "@/components/Message/Message";
export default function Home() {
    return (
        <main className="">
            <Message/>
            <Header />
            <OurCompany />
            <KeyFeatures />
            <Features />
            <HowWorks />
            <Testimonial />
            <GetUpdate />
            <Articles />
        </main>
    );
}
