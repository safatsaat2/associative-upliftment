import CustomBanner2 from "../../Components/CustomBanner2";
import CustomBanner3 from "../../Components/CustomBanner3";
import CustomBanner4 from "../../Components/CustomBanner4";
import Carro from "../Carro/Carro";
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
        <CustomBanner2 img="https://i.ibb.co/3y9f5qh/Rectangle-6512-1.png" header="Market Research" para="We begin by conducting thorough market research to understand customer needs, preferences, and trends. Our strategy revolves around delivering exceptional value and solutions to our customers, continuously refining our offerings to meet their evolving demands. We prioritize innovation in product development, processes, and technology. We maintain flexibility and adaptability to respond swiftly to market changes, staying ahead of competitors and identifying new opportunities." />

      </div>
      <Ad />
      <div className="max-w-7xl mx-auto my-10">
        <CustomBanner4 img="https://i.ibb.co/WVWkR7X/Rectangle-6512-2.png" header="Business Plan" para="Associative Upliftment works on top-level execution through strategic planning aligned with your business goals and objectives. This includes conducting market research, analyzing industry trends, and identifying growth opportunities." />

        <CustomBanner2 img="https://i.ibb.co/bb72WPb/Rectangle-6512-3.png" header="Client Response" para="Associative Upliftment looks after Associative Upliftment clients by responding correctly! Responding effectively to clients is a critical skill in building and maintaining successful relationships. By providing prompt and appropriate responses, Associative Upliftment demonstrates professionalism, attentiveness, and a commitment to meeting the needs of Associative Upliftment clients." />
      </div>

      
      {/* <VideoSection/> */}
      <ExtraSection />
      <div className="max-w-7xl mx-auto">
        <CardCarro />
      </div>
      
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
