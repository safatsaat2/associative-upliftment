import Carro from "../Carro/Carro";
import About from "./About";
import Ad from "./Ad";
import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services";
import SignUpNow from "./SignUpNow";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Banner />
        <About />
        <Services />
        
      </div>
      <Ad />
      <div className="max-w-7xl mx-auto">
      <Carro/>
      </div>
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
