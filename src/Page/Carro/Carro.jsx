import { Link } from "react-router-dom";

const Carro = () => {
  return (
    <div className="carousel w-full mt-20">
      <div id="slide1" className="carousel-item relative w-full">
        <Link to="/services/1" className="w-full ml-4">
          <img src="https://i.ibb.co/42GrXMt/Group-59.png" className="rounded-md" />
        </Link>
        <Link to="/services/4" className="w-full ml-4">
          <img src="https://i.ibb.co/smNJ84d/Group-61.png" className="rounded-md" />
        </Link>
        <Link to="/services/3" className="w-full ml-4">
          <img src="https://i.ibb.co/bX0tLdn/Group-60.png" className="rounded-md" />
        </Link>
        <Link to="/services/2" className="w-full ml-4">
          <img src="https://i.ibb.co/7GpMTZh/Group-58.png" className="rounded-md" />
        </Link>
        <Link to="/services/6" className="w-full ml-4">
          <img src="https://i.ibb.co/tDKNHV4/Group-59-1.png" className="rounded-md" />
        </Link>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Link to="/services/9" className="w-full ml-4">
          <img src="https://i.ibb.co/TmcY8Y3/Group-62.png" className="rounded-md" />
        </Link>
        <Link to="/services/10" className="w-full ml-4">
          <img src="https://i.ibb.co/QJLjhFk/Group-58-1.png" className="rounded-md" />
        </Link>
        <Link to="/services/8" className="w-full ml-4">
          <img src="https://i.ibb.co/9wG4pL8/Group-61-1.png" className="rounded-md" />
        </Link>
        <Link to="/services/7" className="w-full ml-4">
          <img src="https://i.ibb.co/JCsS0Pg/Group-60-1.png" className="rounded-md" />
        </Link>
        <Link to="/services/5" className="w-full ml-4">
          <img src="https://i.ibb.co/fXGjyZD/Group-59-2.png" className="rounded-md" />
        </Link>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carro;
