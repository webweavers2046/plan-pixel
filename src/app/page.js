import KeyFeatures from "@/pages/Home/Company/KeyFeature/KeyFeatures";
import OurCompany from "@/pages/Home/Company/OurCompany";
import GetUpdate from "@/pages/Home/GetUpdate/GetUpdate";
import HowWorks from "@/pages/Home/howWorks/HowWorks";
 
export default function Home() {
  return (
    <main className="">
      
      <div className="bg-gradient-to-r from-[#bdf16f2f] to-[#50b5771f] py-8">
        <OurCompany />
      </div>
      <KeyFeatures/>
      <HowWorks />
      <GetUpdate/>
    </main>
  );
}
