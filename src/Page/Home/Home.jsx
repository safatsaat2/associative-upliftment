import CustomBanner2 from "../../Components/CustomBanner2";
import CustomBanner3 from "../../Components/CustomBanner3";
import CustomBanner from "../../Components/customBanner";
import Carro from "../Carro/Carro";
import About from "./About";
import AboutHome from "./AboutHome";
import Ad from "./Ad";
import Banner from "./Banner";
import CardCarro from "./CardCarro";
import ExtraSection from "./ExtraSection";
import Footer from "./Footer";
import SignUpNow from "./SignUpNow";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">

        <AboutHome />
        <CustomBanner3 img="https://i.ibb.co/0Y5Zqd5/Rectangle-6512.png" header="Success Mission" para="Our success is the result of setting clear goals and working diligently towards them. Our success strategy is built on several key principles. First and foremost, we prioritize clear and well-defined goals. By setting specific, measurable, achievable, relevant, and time-bound (Associative Upliftment) objectives, we provide a clear direction for our efforts." />
        <CustomBanner2 img="https://i.ibb.co/3y9f5qh/Rectangle-6512-1.png" header="Market Research" para="We begin by conducting thorough market research to understand customer needs, preferences, and trends. Our strategy revolves around delivering exceptional value and solutions to our customers, continuously refining our offerings to meet their evolving demands. We prioritize innovation in product development, processes, and technology. We maintain flexibility and adaptability to respond swiftly to market changes, staying ahead of competitors and identifying new opportunities."/>
      </div>
      <div className="max-w-7xl mx-auto">
        <CardCarro />
      </div>
      {/* <VideoSection/> */}
      <ExtraSection/> 
      <Ad />
      <Carro />
      <div className="relative lg:mt-[370px]">
        <div className="">
          <Footer child={" "} />
        </div>
        <div className="absolute -top-72 right-0 left-0 max-w-7xl mx-auto">
          <SignUpNow />
        </div>
      </div>
    </div>
  );
};

export default Home;
