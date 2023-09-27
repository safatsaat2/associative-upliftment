import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Dashboardtitle = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menu, setMenu] = useState(false)


  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#3C4F56]">
      <div className="max-w-[1383px] mx-auto flex flex-row items-center justify-between py-6 lg:pt-4 lg:py-[10px]">

        <div className=" flex items-center font-semibold ">
          <img src="https://i.ibb.co/FDrrYPz/Ellipse-759.png" className=' rounded-full' alt="" />
          <p className="text-base lg:text-[20px] text-white ml-[24px] font-harlow">Associative Upliftment</p>
        </div>
        <div>


          <div>
            <div className="mx-auto">
              {
                menu === false ? <Icon onClick={() => setMenu(!menu)} icon="material-symbols:menu" className="lg:hidden text-4xl ml-2 pt-2" />
                  :
                  <Icon onClick={() => setMenu(!menu)} icon="akar-icons:cross" className="lg:hidden text-4xl ml-2 pt-2" />
              }
              <div className={menu === true ? "w-full lg:w-[160px] lg:flex flex-col  rounded-none h-full" : " lg:flex flex-col rounded-none sticky top-0 h-full hidden"}>
                <div className="flex flex-col lg:flex-row ">

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/home" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px] hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Home
                      </p>
                    </Link>
                  </div>

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/neworder" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px]   hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Hire Team
                      </p>
                    </Link>
                  </div>

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/customorder" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px]   hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Custom Order
                      </p>
                    </Link>
                  </div>



                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/orders" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px]   hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Orders
                      </p>
                    </Link>
                  </div>

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/ourteam" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px]   hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Our Team
                      </p>
                    </Link>
                  </div>

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/addfunds" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px] hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Add Funds
                      </p>
                    </Link>
                  </div>

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/complainbox" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px]   hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Ticket
                      </p>
                    </Link>
                  </div>

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/youroffer">
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px]   hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Your Offer
                      </p>
                    </Link>
                  </div>

                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/contact">
                      <p onClick={() => setMenu(false)} className=" text-white text-[12px]   hover:text-[#16C2B8] cursor-pointer rounded-md ">
                        Contact
                      </p>
                    </Link>
                  </div>


                  <div className="px-[11px] border-r border-[#EFAF4E] py-[10px]">
                    <Link to="/dashboard/earnmoney" onClick={toTop}>
                      <p onClick={() => setMenu(false)} className="  text-white text-[12px] hover:text-[#16C2B8] cursor-pointer rounded-md">
                        Earn Money
                      </p>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="">
          <div className="flex items-center lg:gap-x-[30px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="10.8333" r="3.25" fill="white" />
              <circle cx="13" cy="13" r="9.75" stroke="white" strokeWidth="1.2" />
              <path d="M19.3612 20.3756C19.4446 20.309 19.4782 20.1972 19.4407 20.0973C19.0335 19.0144 18.2145 18.0598 17.0965 17.3693C15.9213 16.6435 14.4814 16.25 13 16.25C11.5187 16.25 10.0787 16.6435 8.90347 17.3693C7.78552 18.0598 6.96655 19.0144 6.55934 20.0973C6.52176 20.1972 6.55541 20.309 6.63881 20.3756C10.3588 23.348 15.6412 23.348 19.3612 20.3756Z" fill="#2A4157" fillOpacity="0.24" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.8448 2.84822C14.972 2.46292 14.0086 2.25 12.9998 2.25C9.40657 2.25 6.38792 4.95182 5.99111 8.52311L5.71833 10.9782C5.69841 11.1575 5.69001 11.2326 5.68026 11.3057C5.56089 12.2017 5.26913 13.066 4.82112 13.851C4.78452 13.9151 4.74569 13.9799 4.65288 14.1346L4.02668 15.1783L3.99721 15.2274C3.70378 15.7163 3.43829 16.1587 3.27073 16.5335C3.09871 16.9182 2.92887 17.4423 3.10686 18.0126C3.19165 18.2842 3.33346 18.5347 3.5228 18.7472C3.92021 19.1932 4.45698 19.3172 4.87539 19.3676C5.28298 19.4168 5.79891 19.4167 6.36915 19.4167L6.42642 19.4167H19.5733L19.6305 19.4167C20.2008 19.4167 20.7167 19.4168 21.1243 19.3676C21.5427 19.3172 22.0795 19.1932 22.4769 18.7472C22.6662 18.5347 22.808 18.2842 22.8928 18.0126C23.0708 17.4423 22.901 16.9182 22.7289 16.5335C22.5614 16.1587 22.2959 15.7163 22.0025 15.2274L22.0024 15.2273L21.973 15.1783L21.3468 14.1346C21.254 13.9799 21.2151 13.9151 21.1786 13.851C20.7789 13.1507 20.5036 12.3873 20.3641 11.5947C20.083 11.642 19.7943 11.6667 19.4998 11.6667C19.0983 11.6667 18.7075 11.6209 18.3323 11.5342C18.3338 11.5462 18.3354 11.558 18.3369 11.5699C18.4904 12.7218 18.8655 13.8331 19.4415 14.8423C19.4902 14.9275 19.5407 15.0117 19.6252 15.1526L19.6254 15.1529L19.6318 15.1636L20.258 16.2073C20.5905 16.7614 20.7909 17.0988 20.9031 17.3498L20.9155 17.3781L20.8849 17.382C20.6119 17.4149 20.2195 17.4167 19.5733 17.4167H6.42642C5.78021 17.4167 5.38772 17.4149 5.11477 17.382L5.08415 17.3781L5.09654 17.3498C5.20876 17.0988 5.40919 16.7614 5.74167 16.2073L6.36787 15.1636L6.37411 15.1532L6.37414 15.1531C6.45888 15.0119 6.50945 14.9276 6.55813 14.8423C7.13415 13.8331 7.50926 12.7218 7.66274 11.5699C7.67571 11.4725 7.68656 11.3748 7.70475 11.2111L7.7061 11.199L7.97888 8.74397C8.26315 6.18555 10.4257 4.25 12.9998 4.25C13.5999 4.25 14.1775 4.35517 14.7143 4.54888C14.976 3.90747 15.363 3.33046 15.8448 2.84822ZM18.3253 4.67897C17.7283 5.06482 17.3332 5.73626 17.3332 6.5C17.3332 6.57514 17.337 6.64939 17.3445 6.72256C17.5634 7.09094 17.7372 7.49034 17.8578 7.91361C18.2551 8.37473 18.8434 8.66667 19.4998 8.66667C19.6783 8.66667 19.8517 8.64509 20.0176 8.60442L20.0086 8.52311C19.845 7.0513 19.2362 5.72717 18.3253 4.67897Z" fill="white" />
              <path d="M9.86074 19.1367C10.0459 20.1733 10.4539 21.0893 11.0215 21.7426C11.5891 22.3959 12.2846 22.75 13 22.75C13.7154 22.75 14.4109 22.3959 14.9785 21.7426C15.5461 21.0893 15.9541 20.1733 16.1393 19.1367" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="19.5026" cy="6.5" r="2.66667" fill="white" stroke="white" />
            </svg>
            <div>
              {user ? (
                <>
                  <Link to="/login">
                    <button
                      onClick={logOut}
                      className="bg-[#13C6B1] text-white rounded-lg px-[21px] py-[11px] text-xl"
                    >
                      Logout
                    </button>
                  </Link>
                </>
              ) : (
                <>

                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboardtitle;
