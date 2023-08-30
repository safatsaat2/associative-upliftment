import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const CardCarro = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const slide2 = [


    {
      id: "6",
      img: "https://i.ibb.co/Rv1yxWP/Rectangle-6454.png",

      user: "Galactic Guardians Team",
      userPic: "https://i.ibb.co/sKMJXX4/Whats-App-Image-2023-07-31-at-00-35-34.jpg",
      star: 5,
    },
  ];





  return (
    <>
      <h1 className="text-3xl lg:text-7xl font-red font-bold pt-16">Our Special Team</h1>
      <div className="mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={`/team/2`} onClick={toTop}>
              <div

                className="  mb-10 hover:translate-y-2 duration-300"
              >
                <img
                  className="w-[370px] h-[250px]"
                  src="https://i.ibb.co/N9Bsr1L/Rectangle-6445.png"
                  alt=""
                />
                <div className="flex items-center my-2">
                  <img
                    className="w-[50px] h-[52px] my-5"
                    src="https://i.ibb.co/z4SKbDZ/Whats-App-Image-2023-07-31-at-00-21-00.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <p className="font-semibold text-md">Dynamic Squad Team</p>
                    <p className="text-sm">BUSINESS GROWTH 2023</p>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/team/5`} onClick={toTop}>
              <div

                className="  mb-10 hover:translate-y-2 duration-300"
              >
                <img
                  className="w-[370px] h-[250px]"
                  src="https://i.ibb.co/8cmmmLX/Rectangle-6446.png"
                  alt=""
                />
                <div className="flex items-center my-2">
                  <img
                    className="w-[50px] h-[52px] my-5"
                    src="https://i.ibb.co/svJgchW/Whats-App-Image-2023-07-31-at-00-33-33.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <p className="font-semibold text-md">Dragon Squad Team</p>
                    <p className="text-sm">BUSINESS GROWTH 2023</p>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/team/4`} onClick={toTop}>
              <div

                className="  mb-10 hover:translate-y-2 duration-300"
              >
                <img
                  className="w-[370px] h-[250px]"
                  src="https://i.ibb.co/wS6Pk1N/Rectangle-6447.png"
                  alt=""
                />
                <div className="flex items-center my-2">
                  <img
                    className="w-[50px] h-[52px] my-5"
                    src="https://i.ibb.co/0cJwXHp/Whats-App-Image-2023-07-31-at-00-23-41.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <p className="font-semibold text-md">Titans Alliance Team</p>
                    <p className="text-sm">BUSINESS GROWTH 2023</p>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/team/1`} onClick={toTop}>
              <div

                className="  mb-10 hover:translate-y-2 duration-300"
              >
                <img
                  className="w-[370px] h-[250px]"
                  src="https://i.ibb.co/VS8fWgj/Rectangle-6448.png"
                  alt=""
                />
                <div className="flex items-center my-2">
                  <img
                    className="w-[50px] h-[52px] my-5"
                    src="https://i.ibb.co/Hr8wSJK/Whats-App-Image-2023-07-31-at-00-26-32.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <p className="font-semibold text-md">Strategy Stars Team</p>
                    <p className="text-sm">BUSINESS GROWTH 2023</p>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/team/3`} onClick={toTop}>
              <div

                className="  mb-10 hover:translate-y-2 duration-300"
              >
                <img
                  className="w-[370px] h-[250px]"
                  src="https://i.ibb.co/Z17KsJD/Rectangle-6453.png"
                  alt=""
                />
                <div className="flex items-center my-2">
                  <img
                    className="w-[50px] h-[52px] my-5"
                    src="https://i.ibb.co/kcH9ntK/Whats-App-Image-2023-07-31-at-00-28-59.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <p className="font-semibold text-md">Galaxy Gliders Team</p>
                    <p className="text-sm">BUSINESS GROWTH 2023</p>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/team/6`} onClick={toTop}>
              <div

                className="  mb-10 hover:translate-y-2 duration-300"
              >
                <img
                  className="w-[370px] h-[250px]"
                  src="https://i.ibb.co/Rv1yxWP/Rectangle-6454.png"
                  alt=""
                />
                <div className="flex items-center my-2">
                  <img
                    className="w-[50px] h-[52px] my-5"
                    src="https://i.ibb.co/sKMJXX4/Whats-App-Image-2023-07-31-at-00-35-34.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <p className="font-semibold text-md">Galactic Guardians Team</p>
                    <p className="text-sm">BUSINESS GROWTH 2023</p>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>


    </>
  );
};

export default CardCarro;
