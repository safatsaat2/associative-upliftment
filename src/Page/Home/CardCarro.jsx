import ReactStars from "react-stars";

const CardCarro = () => {
  const slide1 = [
    {
      id: "3",
      img: "https://i.ibb.co/1KXd596/image.png",
      title: "Book Cover Design",
      user: "Strategy Stars Team",
      userPic: "https://i.ibb.co/Hr8wSJK/Whats-App-Image-2023-07-31-at-00-26-32.jpg",
      star: 3,
    },
    {
      id: "2",
      img: "https://i.ibb.co/nBG5sHm/image.png",
      title: "Full Stack Development",
      user: "Dragon Squad Team",
      userPic: "",
      star: 4,
    },
    {
      id: "1",
      img: "https://i.ibb.co/gZ3yvXX/Frame-4141.png",
      title: "UI/UX Design",
      user: "Galaxy Gliders Team",
      userPic: "https://i.ibb.co/kcH9ntK/Whats-App-Image-2023-07-31-at-00-28-59.jpg",
      star: 5,
    },
  ];
  const slide2 = [
    {
      id: "3",
      img: "https://i.ibb.co/nRPh3Pm/image.png",
      title: "Illustration Design",
      user: "Titans Alliance Team",
      userPic: "https://i.ibb.co/0cJwXHp/Whats-App-Image-2023-07-31-at-00-23-41.jpg",
      star: 6,
    },
    {
      id: "2",
      img: "https://i.ibb.co/ZcMSZww/image.png",
      title: "Magazines Design",
      user: "Dynamic Squad Team",
      userPic: "https://i.ibb.co/z4SKbDZ/Whats-App-Image-2023-07-31-at-00-21-00.jpg",
      star: 7,
    },
    {
      id: "1",
      img: "https://i.ibb.co/J3NdKz9/image.png",
      title: "Photography Product",
      user: "Galactic Guardians Team",
      userPic: "",
      star: 8,
    },
  ];
  return (
    <>
      <div className="carousel w-full mt-20">
        <div id="slide3" className="carousel-item relative w-full">
          {slide1.map((card) => (
            <div
              key={card.id}
              className="mx-5 shadow-lg rounded-xl bg-slate-50"
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
                  <p>by {card.user}</p>
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
              className="mx-5 shadow-lg rounded-xl bg-slate-50"
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
                  <p>by {card.user}</p>
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
    </>
  );
};

export default CardCarro;
