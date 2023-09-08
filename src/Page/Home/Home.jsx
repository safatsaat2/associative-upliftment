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

      </div>
      <div className="max-w-7xl mx-auto">
        <CardCarro />
      </div>
      <VideoSection/>
      <Ad />
      <ExtraSection/>
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
