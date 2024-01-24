import KeyFeatures from "@/pages/Home/KeyFeature/KeyFeatures";
import OurCompany from "@/pages/Home/Company/OurCompany";
import GetUpdate from "@/pages/Home/GetUpdate/GetUpdate";
import HowWorks from "@/pages/Home/howWorks/HowWorks";
import Testimonial from "@/pages/Home/Testimonial/Testimonial";
import Header from "@/pages/Home/Header/Header";
import Articles from "@/pages/Home/Articles/Articles";

export default function Home() {
  return (
    <main className="">
      <Header />
      <OurCompany />
      <KeyFeatures />
      <HowWorks />
      <Testimonial />
      <GetUpdate />
      <Articles/>
    </main>
  );
}
