import { Link } from "react-router-dom";

const Carro = () => {
  return (
    <>
      <div className="hidden lg:block max-w-[1400px] relative mx-auto">
        <h1 className="text-5xl text-center font-bold pb-8">Popular Services</h1>
        <div className="carousel w-full mb-20">
          <div id="slide1" className="carousel-item w-full">
            <Link to="/services/1" className="w-full ml-4">
              <img src="https://i.ibb.co/LtCNz8j/Group-1000003431-1.png" className="rounded-md" />
            </Link>
            <Link to="/services/4" className="w-full ml-4">
              <img src="https://i.ibb.co/HN0n25v/Group-1000003432-2.png" className="rounded-md" />
            </Link>
            <Link to="/services/3" className="w-full ml-4">
              <img src="https://i.ibb.co/6W6JfmM/Group-1000003433-1.png" className="rounded-md" />
            </Link>
            <Link to="/services/2" className="w-full ml-4">
              <img src="https://i.ibb.co/m9cCsG9/Group-1000003434-1.png" className="rounded-md" />
            </Link>
            <Link to="/services/6" className="w-full ml-4">
              <img src="https://i.ibb.co/BLsCxjM/Group-1000003435-1.png" className="rounded-md" />
            </Link>

            <div className="absolute flex justify-between transform -translate-y-1/2 -left-1 -right-5 top-1/2">
              <a href="#slide2" style={{}} >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
                
              </a>
              <a href="#slide2" >
                
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Link to="/services/9" className="w-full ml-4">
              <img src="https://i.ibb.co/Y3RLvs3/Group-1000003431-2.png" className="rounded-md" />
            </Link>
            <Link to="/services/10" className="w-full ml-4">
              <img src="https://i.ibb.co/2nBPsF0/Group-1000003432-3.png" className="rounded-md" />
            </Link>
            <Link to="/services/8" className="w-full ml-4">
              <img src="https://i.ibb.co/XFLcMgr/Group-1000003433-2.png" className="rounded-md" />
            </Link>
            <Link to="/services/7" className="w-full ml-4">
              <img src="https://i.ibb.co/ZhMRhmk/Group-1000003434-2.png" className="rounded-md" />
            </Link>
            <Link to="/services/5" className="w-full ml-4">
              <img src="https://i.ibb.co/nLDRKxJ/Group-1000003435-2.png" className="rounded-md" />
            </Link>

            <div className="absolute flex justify-between transform -translate-y-1/2 -left-1 -right-5 top-1/2">
            <a href="#slide1" style={{}} >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
                
              </a>
              <a href="#slide1" >
                
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block mx-auto w-full lg:hidden">
      <h1 className="text-3xl text-center font-bold pb-8">Our Shop</h1>
        <div className="carousel w-full mb-20">
        <h1 className="text-3xl text-center font-bold pb-8">Our Shop</h1>
          <div id="slide5" className="carousel-item relative w-full">
            <Link to="/services/1" className="w-full mx-20">
              <img src="https://i.ibb.co/42GrXMt/Group-59.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide14" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <Link to="/services/4" className="w-full mx-20">
              <img src="https://i.ibb.co/smNJ84d/Group-61.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide7" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <Link to="/services/3" className="w-full mx-20">
              <img src="https://i.ibb.co/bX0tLdn/Group-60.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide8" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide8" className="carousel-item relative w-full">
            <Link to="/services/2" className="w-full mx-20">
              <img src="https://i.ibb.co/7GpMTZh/Group-58.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide7" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide9" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide9" className="carousel-item relative w-full">
            <Link to="/services/6" className="w-full mx-20">
              <img src="https://i.ibb.co/tDKNHV4/Group-59-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide8" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide10" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide10" className="carousel-item relative w-full">
            <Link to="/services/9" className="w-full mx-20">
              <img src="https://i.ibb.co/TmcY8Y3/Group-62.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide9" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide11" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide11" className="carousel-item relative w-full">
            <Link to="/services/10" className="w-full mx-20">
              <img src="https://i.ibb.co/QJLjhFk/Group-58-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide10" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide12" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide12" className="carousel-item relative w-full">
            <Link to="/services/8" className="w-full mx-20">
              <img src="https://i.ibb.co/9wG4pL8/Group-61-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide11" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide13" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide13" className="carousel-item relative w-full">
            <Link to="/services/7" className="w-full mx-20">
              <img src="https://i.ibb.co/JCsS0Pg/Group-60-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide12" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide14" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide14" className="carousel-item relative w-full">
            <Link to="/services/5" className="w-full mx-20">
              <img src="https://i.ibb.co/fXGjyZD/Group-59-2.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide13" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carro;
