import Articles from "@/components/Home/Articles/Articles";
import OurCompany from "@/components/Home/Company/OurCompany";
import Features from "@/components/Home/Features/Features";
import GetUpdate from "@/components/Home/GetUpdate/GetUpdate";
import Header from "@/components/Home/Header/Header";
import KeyFeatures from "@/components/Home/KeyFeature/KeyFeatures";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import HowWorks from "@/components/Home/howWorks/HowWorks";

export default function Home() {
  return (
    <main className="">
      <FacebookProvider appId="1574756050007081">
        <MessageUs messengerAppId="123456789" pageId="100862432719404" />
      </FacebookProvider>
      <Header />
      <OurCompany />
      {/* <KeyFeatures /> */}
      <Features />
      <HowWorks />
      <Testimonial />
      <GetUpdate />
      <Articles />
    </main>
  );
}
