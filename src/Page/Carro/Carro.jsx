import { Link } from "react-router-dom";

const Carro = () => {
  return (
    <>
      <div className="hidden lg:block max-w-7xl relative mx-auto">
        <h1 className="text-5xl text-center font-bold pb-8">Popular Services</h1>
        <div className="carousel w-full mb-20">
          <div id="slide1" className="carousel-item w-full">
            <Link to="/popularservice/1" className="w-full ml-4">
              <img src="https://i.ibb.co/LtCNz8j/Group-1000003431-1.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/2" className="w-full ml-4">
              <img src="https://i.ibb.co/HN0n25v/Group-1000003432-2.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/3" className="w-full ml-4">
              <img src="https://i.ibb.co/6W6JfmM/Group-1000003433-1.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/4" className="w-full ml-4">
              <img src="https://i.ibb.co/m9cCsG9/Group-1000003434-1.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/5" className="w-full ml-4">
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
            <Link to="/popularservice/6" className="w-full ml-4">
              <img src="https://i.ibb.co/Y3RLvs3/Group-1000003431-2.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/7" className="w-full ml-4">
              <img src="https://i.ibb.co/2nBPsF0/Group-1000003432-3.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/8" className="w-full ml-4">
              <img src="https://i.ibb.co/XFLcMgr/Group-1000003433-2.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/9" className="w-full ml-4">
              <img src="https://i.ibb.co/ZhMRhmk/Group-1000003434-2.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/10" className="w-full ml-4">
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
      {/* Mobile Responsive */}
      <div className="block mx-auto w-full lg:hidden">
        <h1 className="text-3xl text-center font-bold pb-8">Popular Services</h1>
        <div className="carousel w-full mb-20">
          <h1 className="text-3xl text-center font-bold pb-8">Popular Services</h1>
          <div id="slide5" className="carousel-item relative w-full">
            <Link to='/popularservice/1' className="w-full mx-20">
              <img src="https://i.ibb.co/LtCNz8j/Group-1000003431-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide14" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide6" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <Link to="/popularservice/2" className="w-full mx-20">
              <img src="https://i.ibb.co/HN0n25v/Group-1000003432-2.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide7" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <Link to="/popularservice/3" className="w-full mx-20">
              <img src="https://i.ibb.co/6W6JfmM/Group-1000003433-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide8" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide8" className="carousel-item relative w-full">
            <Link to="/popularservice/4" className="w-full mx-20">
              <img src="https://i.ibb.co/m9cCsG9/Group-1000003434-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide7" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide9" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide9" className="carousel-item relative w-full">
            <Link to="/popularservice/5" className="w-full mx-20">
              <img src="https://i.ibb.co/BLsCxjM/Group-1000003435-1.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide8" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide10" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide10" className="carousel-item relative w-full">
            <Link to="/popularservice/6" className="w-full mx-20">
              <img src="https://i.ibb.co/Y3RLvs3/Group-1000003431-2.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide9" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide11" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide11" className="carousel-item relative w-full">
            <Link to="/popularservice/7" className="w-full mx-20">
              <img src="https://i.ibb.co/2nBPsF0/Group-1000003432-3.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide10" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide12" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide12" className="carousel-item relative w-full">
            <Link to="/popularservice/8" className="w-full mx-20">
              <img src="https://i.ibb.co/XFLcMgr/Group-1000003433-2.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide11" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide13" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide13" className="carousel-item relative w-full">
            <Link to="/popularservice/9" className="w-full mx-20">
              <img src="https://i.ibb.co/ZhMRhmk/Group-1000003434-2.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide12" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide14" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
          <div id="slide14" className="carousel-item relative w-full">
            <Link to="/popularservice/10" className="w-full mx-20">
              <img src="https://i.ibb.co/nLDRKxJ/Group-1000003435-2.png" className="rounded-md" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide13" >
                <img src="https://i.ibb.co/QNmHzYR/buton.png" alt="" />
              </a>
              <a href="#slide5" >
                <img src="https://i.ibb.co/kyXpWHZ/buton-1.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carro;
