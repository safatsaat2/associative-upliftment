import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  //  <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-[#1475EA] w-[45px] text-[8px] lg:text-base lg:w-[95px] py-2 px-3 ml-20 text-white rounded-[10px]">
  //                 FREE
  //               </button>

  return (
    <div className="bg-[#183351] py-[70px] px-[70px] rounded-[38px]">
      {/* Modal Starts */}
      <dialog id="my_modal_3" className="modal" >
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='w-full lg:flex justify-between items-center rounded-[10px] mt-6'>
            <div>
              <h3 className="lg:text-[32px]  lg:pt-4 pl-4 font-red  pt-4">FACEBOOK POST DESIGN</h3>
              <p className="text-[12px] lg:text-lg my-[12px] lg:pt-6 lg:py-4 pl-4 font-red">NEW FACEBOOK POST DESIGN 2023

              </p>
              <p className="text-[12px] lg:text-lg my-[12px]  lg:py-4 pl-4 font-red">Invite Your 5 Friends</p>
            </div>
            <button className="lg:text-lg  mr-16 mb-4 lg:mb-0 text-white font-red bg-[#1E6ECE] px-2 py-2 rounded-[10px] ml-4 lg:ml-0">Get Free</button>
          </div>
        </div>
      </dialog>
      <div className="max-w-[1292.01px] mx-auto">
        <div className="flex justify-between items-end">
          <p className="text-[40px] font-bold leading-[50px] text-white">Hi {user?.displayName}</p>
          <p className="text-[32px] leading-[42px] text-white">Balance:$00</p>
        </div>

        <div className="mt-20 flex items-start gap-x-[68px]">
          <div className="flex items-center gap-x-[82px]">
            <img src="https://i.ibb.co/8gcTC7v/Group-1000003604.png" alt="" />
            <img src="https://i.ibb.co/vjbD9sp/Group-1000003605.png" alt="" />
          </div>
          <div>
            <img onClick={() => document.getElementById('my_modal_3').showModal()} className="mt-[19px] cursor-pointer" src="https://i.ibb.co/ChCtMxS/bts.png" alt="" />
            <img onClick={() => document.getElementById('my_modal_3').showModal()} className="mt-[19px] cursor-pointer" src="https://i.ibb.co/nm77N3p/bts-1.png" alt="" />
            <img onClick={() => document.getElementById('my_modal_3').showModal()} className="mt-[19px] cursor-pointer" src="https://i.ibb.co/7Q40hWR/bts-2.png" alt="" />
          </div>
        </div>
        <div className="mt-[48px] flex items-center gap-x-[30px]">
          <div>
            <img src="https://i.ibb.co/y5JDG35/1-20.png" alt="" />
            <img className="mt-[30px]" src="https://i.ibb.co/px04KcY/2-3.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/F69grDR/3-4.png" alt="" />
          </div>
        </div>
      </div>



      {/* Modal Ends */}

      {/* First line of dashboard */}


    </div>
  );
};

export default Dashboard;
