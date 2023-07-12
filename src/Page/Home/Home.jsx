import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import SignUpNow from "./SignUpNow";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <SignUpNow/>
        </div>
    );
};

export default Home;