import { Link } from "react-router-dom";
import Footer from "../Home/Footer";

const Shop = () => {
    return (
        <>
            <h1 className="text-5xl text-center font-bold py-8">Our Shop</h1>
            <div className="my-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[120px] gap-y-[75px] max-w-6xl mx-auto">
                    <Link to="/services/1">
                        <img src="https://i.ibb.co/42GrXMt/Group-59.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/4">
                        <img src="https://i.ibb.co/smNJ84d/Group-61.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/3">
                        <img src="https://i.ibb.co/bX0tLdn/Group-60.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/2">
                        <img src="https://i.ibb.co/7GpMTZh/Group-58.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/6">
                        <img src="https://i.ibb.co/tDKNHV4/Group-59-1.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/9">
                        <img src="https://i.ibb.co/TmcY8Y3/Group-62.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/10">
                        <img src="https://i.ibb.co/QJLjhFk/Group-58-1.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/8">
                        <img src="https://i.ibb.co/9wG4pL8/Group-61-1.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/7">
                        <img src="https://i.ibb.co/JCsS0Pg/Group-60-1.png" className="rounded-md" />
                    </Link>
                    <Link to="/services/5" className="w-full">
                        <img src="https://i.ibb.co/fXGjyZD/Group-59-2.png" className="rounded-md" />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Shop;