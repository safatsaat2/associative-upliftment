import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const CardCarro = () => {
  const slide1 = [
    {
      id: "1",
      img: "https://i.ibb.co/1KXd596/image.png",
      title: "Book Cover Design",
      user: "Strategy Stars Team",
      userPic:
        "https://i.ibb.co/Hr8wSJK/Whats-App-Image-2023-07-31-at-00-26-32.jpg",
      star: 3,
    },
    {
      id: "2",
      img: "https://i.ibb.co/ZcMSZww/image.png",
      title: "Magazines Design",
      user: "Dynamic Squad Team",
      userPic:
        "https://i.ibb.co/z4SKbDZ/Whats-App-Image-2023-07-31-at-00-21-00.jpg",
      star: 4,
    },

    {
      id: "3",
      img: "https://i.ibb.co/gZ3yvXX/Frame-4141.png",
      title: "UI/UX Design",
      user: "Galaxy Gliders Team",
      userPic:
        "https://i.ibb.co/kcH9ntK/Whats-App-Image-2023-07-31-at-00-28-59.jpg",
      star: 5,
    },
  ];
  const slide2 = [
    {
      id: "4",
      img: "https://i.ibb.co/nRPh3Pm/image.png",
      title: "Illustration Design",
      user: "Titans Alliance Team",
      userPic:
        "https://i.ibb.co/0cJwXHp/Whats-App-Image-2023-07-31-at-00-23-41.jpg",
      star: 6,
    },
    {
      id: "5",
      img: "https://i.ibb.co/nBG5sHm/image.png",
      title: "Full Stack Development",
      user: "Dragon Squad Team",
      userPic: "https://i.ibb.co/svJgchW/Whats-App-Image-2023-07-31-at-00-33-33.jpg",
      star: 7,
    },
    {
      id: "6",
      img: "https://i.ibb.co/J3NdKz9/image.png",
      title: "Photography Product",
      user: "Galactic Guardians Team",
      userPic: "https://i.ibb.co/sKMJXX4/Whats-App-Image-2023-07-31-at-00-35-34.jpg",
      star: 8,
    },
  ];
  return (
    <>
      <h1 className="text-3xl lg:text-5xl text-center font-bold pt-16">Our Special Team</h1>
      <div className="carousel w-full mt-10 hidden lg:inline-flex">

        <div id="slide3" className="carousel-item relative w-full">
          {slide1.map((card) => (
            <Link to={`/team/${card.id}`} key={card.id}>
              <div
                
                className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
              >
                <img
                  className="w-[400px] h-[350px] rounded-t-xl"
                  src={card.img}
                  alt=""
                />
                <div className="flex items-center my-2">
                  <img
                    className="w-16 h-16 ml-5  rounded-full"
                    src={card.userPic}
                    alt=""
                  />
                  <div className="ml-5">
                    <p className="font-semibold text-lg">{card.title}</p>
                    <p>By {card.user}</p>
                    <ReactStars
                      value={card.star}
                      count={8}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          {slide2.map((card) => (
            <div
              key={card.id}
              className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
            >
              <img
                className="w-[400px] h-[350px] rounded-t-xl"
                src={card.img}
                alt=""
              />
              <div className="flex items-center my-2">
                <img
                  className="w-16 h-16 ml-5 my-5 rounded-full"
                  src={card.userPic}
                  alt=""
                />
                <div className="ml-5">
                  <p className="font-semibold text-lg">{card.title}</p>
                  <p>By {card.user}</p>
                  <ReactStars
                    value={card.star}
                    count={8}
                    size={24}
                    edit={false}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* MObile Responsive */}
      <div className="carousel w-full mt-10 mb-20 lg:hidden">
        <div id="slide16" className="carousel-item relative w-full">

          <div
            className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
          >
            <img
              className="w-[400px] h-[350px] rounded-t-xl"
              src="https://i.ibb.co/1KXd596/image.png"
              alt=""
            />
            <div className="flex items-center my-2">
              <img
                className="w-16 h-16 ml-5 my-5 rounded-full"
                src="https://i.ibb.co/Hr8wSJK/Whats-App-Image-2023-07-31-at-00-26-32.jpg"
                alt=""
              />
              <div className="ml-5">
                <p className="font-semibold text-lg">Book Cover Design</p>
                <p>By Strategy Stars Team</p>
                <ReactStars
                  value={3}
                  count={8}
                  size={24}
                  edit={false}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide21" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide17" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide17" className="carousel-item relative w-full">
          <div
            className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
          >
            <img
              className="w-[400px] h-[350px] rounded-t-xl"
              src="https://i.ibb.co/ZcMSZww/image.png"
              alt=""
            />
            <div className="flex items-center my-2">
              <img
                className="w-16 h-16 ml-5 my-5 rounded-full"
                src="https://i.ibb.co/z4SKbDZ/Whats-App-Image-2023-07-31-at-00-21-00.jpg"
                alt=""
              />
              <div className="ml-5">
                <p className="font-semibold text-lg">Magazines Design</p>
                <p>By Dynamic Squad Team</p>
                <ReactStars
                  value={4}
                  count={8}
                  size={24}
                  edit={false}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide16" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide18" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide18" className="carousel-item relative w-full">
          <div
            className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
          >
            <img
              className="w-[400px] h-[350px] rounded-t-xl"
              src="https://i.ibb.co/gZ3yvXX/Frame-4141.png"
              alt=""
            />
            <div className="flex items-center my-2">
              <img
                className="w-16 h-16 ml-5 my-5 rounded-full"
                src="https://i.ibb.co/kcH9ntK/Whats-App-Image-2023-07-31-at-00-28-59.jpg"
                alt=""
              />
              <div className="ml-5">
                <p className="font-semibold text-lg">UI/UX Design</p>
                <p>By Galaxy Gliders Team</p>
                <ReactStars
                  value={5}
                  count={8}
                  size={24}
                  edit={false}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide17" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide19" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide19" className="carousel-item relative w-full">
          <div
            className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
          >
            <img
              className="w-[400px] h-[350px] rounded-t-xl"
              src="https://i.ibb.co/nRPh3Pm/image.png"
              alt=""
            />
            <div className="flex items-center my-2">
              <img
                className="w-16 h-16 ml-5 my-5 rounded-full"
                src="https://i.ibb.co/0cJwXHp/Whats-App-Image-2023-07-31-at-00-23-41.jpg"
                alt=""
              />
              <div className="ml-5">
                <p className="font-semibold text-lg">Illustration Design</p>
                <p>By Titans Alliance Team</p>
                <ReactStars
                  value={6}
                  count={8}
                  size={24}
                  edit={false}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide18" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide20" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide20" className="carousel-item relative w-full">
          <div
            className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
          >
            <img
              className="w-[400px] h-[350px] rounded-t-xl"
              src="https://i.ibb.co/nBG5sHm/image.png"
              alt=""
            />
            <div className="flex items-center my-2">
              <img
                className="w-16 h-16 ml-5 my-5 rounded-full"
                src="https://i.ibb.co/svJgchW/Whats-App-Image-2023-07-31-at-00-33-33.jpg"
                alt=""
              />
              <div className="ml-5">
                <p className="font-semibold text-lg">Full Stack Development</p>
                <p>By Dragon Squad Team</p>
                <ReactStars
                  value={7}
                  count={8}
                  size={24}
                  edit={false}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide19" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide21" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide21" className="carousel-item relative w-full">
          <div
            className="mx-5 shadow-lg rounded-xl bg-slate-50 hover:translate-y-2 duration-300"
          >
            <img
              className="w-[400px] h-[350px] rounded-t-xl"
              src="https://i.ibb.co/J3NdKz9/image.png"
              alt=""
            />
            <div className="flex items-center my-2">
              <img
                className="w-16 h-16 ml-5 my-5 rounded-full"
                src="https://i.ibb.co/sKMJXX4/Whats-App-Image-2023-07-31-at-00-35-34.jpg"
                alt=""
              />
              <div className="ml-5">
                <p className="font-semibold text-lg">Photography Product</p>
                <p>By Galactic Guardians Team</p>
                <ReactStars
                  value={8}
                  count={8}
                  size={24}
                  edit={false}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
            <a href="#slide20" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide16" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCarro;
