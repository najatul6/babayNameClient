import Banner from "@/components/RootView/Home/Banner";
import JourneySection from "@/components/RootView/Home/JourneySection";

const Home = () => {
  return (
    <div className="">
     <Banner/>
    <div className="max-w-[1440px] mx-auto px-2 mt-5">
    <JourneySection/>
    </div>
    </div>
  );
};

export default Home;
