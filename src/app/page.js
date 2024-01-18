import KeyFeatures from "@/pages/Home/Company/KeyFeature/KeyFeatures";
import OurCompany from "@/pages/Home/Company/OurCompany";
import HowWorks from "@/pages/Home/howWorks/HowWorks";
 
export default function Home() {
  return (
    <main className="">
      
      <div className="bg-[#e2e2e267] py-8">
        <OurCompany />
      </div>
      <KeyFeatures/>
      {/* <HowWorks /> */}
    </main>
  );
}
