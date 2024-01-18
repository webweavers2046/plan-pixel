import KeyFeatures from "@/pages/Home/KeyFeature/KeyFeatures";
import OurCompany from "@/pages/Home/Company/OurCompany";
import GetUpdate from "@/pages/Home/GetUpdate/GetUpdate";
import HowWorks from "@/pages/Home/howWorks/HowWorks";
 
export default function Home() {
  return (
    <main className="">
      
      <div className="bg-[#e2e2e267] py-8">
        <OurCompany />
      </div>
      <KeyFeatures/>
      <HowWorks />
      <GetUpdate/>
    </main>
  );
}
