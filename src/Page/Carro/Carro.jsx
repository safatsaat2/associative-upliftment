import { Link } from "react-router-dom";

const Carro = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="hidden lg:block max-w-7xl relative mx-auto">
        <h1 className="text-5xl text-center font-bold pb-8">Popular Services</h1>
        <div className="carousel w-full mb-20">
          <div id="slide1" className="carousel-item w-full">
            <Link to="/popularservice/1" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/gwF0fFx/1-3.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/2" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/b5V5mfR/2-1.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/4" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/g915hv3/3.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/6" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/r436jpc/4.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/5" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/3rXxLtt/5.png" className="rounded-md" />
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
            <Link to="/popularservice/8" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/Gtwq3VK/1-4.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/7" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/6t9C7dz/2-2.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/5" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/NV6cFkL/3-2.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/9" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/j4Sb3LC/4-1.png" className="rounded-md" />
            </Link>
            <Link to="/popularservice/10" onClick={toTop} className="w-full ml-4">
              <img src="https://i.ibb.co/KFL38df/5-2.png" className="rounded-md" />
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
            <Link to='/popularservice/1' onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/gwF0fFx/1-3.png" className="rounded-md" />
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
            <Link to="/popularservice/2" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/b5V5mfR/2-1.png" className="rounded-md" />
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
            <Link to="/popularservice/3" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/g915hv3/3.png" className="rounded-md" />
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
            <Link to="/popularservice/4" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/r436jpc/4.png" className="rounded-md" />
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
            <Link to="/popularservice/5" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/3rXxLtt/5.png" className="rounded-md" />
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
            <Link to="/popularservice/6" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/Gtwq3VK/1-4.png" className="rounded-md" />
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
            <Link to="/popularservice/7" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/6t9C7dz/2-2.png" className="rounded-md" />
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
            <Link to="/popularservice/8" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/NV6cFkL/3-2.png" className="rounded-md" />
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
            <Link to="/popularservice/9" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/j4Sb3LC/4-1.png" className="rounded-md" />
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
            <Link to="/popularservice/10" onClick={toTop} className="w-full mx-20">
              <img src="https://i.ibb.co/KFL38df/5-2.png" className="rounded-md" />
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
