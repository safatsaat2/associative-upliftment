import Carro from "../Carro/Carro";
import About from "./About";
import Ad from "./Ad";
import Banner from "./Banner";
import CardCarro from "./CardCarro";
import Footer from "./Footer";
import SignUpNow from "./SignUpNow";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        
        <About />  
        <Carro/>    
      </div>
      <Ad />
      <div className="max-w-7xl mx-auto">
      <CardCarro/>
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
