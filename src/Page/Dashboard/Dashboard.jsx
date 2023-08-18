import { Link } from "react-router-dom";


const Dashboard = () => {

  return (
    <div className="">
      {/* First line of dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-12">
        <div className="py-4 px-12 col-span-2 bg-white dashShadow rounded-[10px] flex flex-col justify-center items-center">
          <div>
            <h3 className="text-3xl font-red">Growth</h3>
            <img className="mx-2" src="https://i.ibb.co/6mg8NyK/Group-1000003452.png" alt="" />
          </div>
        </div>
        <div className="bg-white pt-4 w-full lg:px-11 dashShadow rounded-[10px] flex flex-col justify-center items-center">
          <div className="">
            <h3 className="lg:text-3xl font-red">Balance</h3>
            <div className="flex gap-x-20">
              <h1 className="text-[36px] lg:text-[80px] font-red">$</h1>
              <h1 className="text-[36px] lg:text-[80px] font-red">1500</h1>
            </div>
            <div className="text-white text-[10px] lg:text-base text-center p-2 ml-[98px] bg-[#1475EA] lg:p-4 w-[85px] lg:w-[143px] rounded-[10px] lg:ml-[160px] mb-6">SEE HISTORY</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="py-4 px-6 lg:px-2 bg-white dashShadow rounded-[10px] ">
          <div className="lg:ml-8">
            <h3 className="lg:text-3xl font-red">Free Services</h3>
            <div className="grid grid-cols-2 justify-center items-center mt-3 font-red">
              <p className="text-[8px] lg:text-[16px]">Service 1</p>
              <Link to="/dashboard/service/1">
                <button className="bg-[#1475EA] w-[45px] text-[8px] lg:text-base lg:w-[95px] py-2 px-3 ml-20 text-white rounded-[10px]">
                  FREE
                </button>
              </Link>

            </div>
            <div className="grid grid-cols-2 justify-center items-center mt-3 font-red">
              <p className="text-[8px] lg:text-[16px]">Service 2</p>
              <Link to="/dashboard/service/2">
                <button className="bg-[#1475EA] w-[45px] text-[8px] lg:text-base lg:w-[95px] py-2 px-3 ml-20 text-white rounded-[10px]">
                  FREE
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 justify-center items-center mt-3 font-red">
              <p className="text-[8px] lg:text-[16px]">Service 3
</p>
              <Link to="/dashboard/service/3">
                <button className="bg-[#1475EA] w-[45px] text-[8px] lg:text-base lg:w-[95px] py-2 px-3 ml-20 text-white rounded-[10px]">
                  FREE
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 justify-center items-center mt-3 font-red">
              <p className="text-[8px] lg:text-[16px]">Service 4</p>
              <Link to="/dashboard/service/4">
                <button className="bg-[#1475EA] w-[45px] text-[8px] lg:text-base lg:w-[95px] py-2 px-3 ml-20 text-white rounded-[10px]">
                  FREE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-4 px-12 bg-white dashShadow rounded-[10px] flex flex-col justify-center items-center ">
          <div className="lg:ml-8">
            <h3 className="lg:text-3xl font-red">Offers</h3>
            <img className="mx-2" src="https://i.ibb.co/JpfphYj/cards-1.png" alt="" />
          </div>
        </div>
        <div className="py-4 px-12 bg-white dashShadow rounded-[10px] ">
          <div className="lg:ml-8">
            <h3 className="lg:text-3xl font-red">Transaction</h3>


          </div>
        </div>
        <div className="py-4 px-8 bg-white dashShadow rounded-[10px] ">
          <div className="lg:ml-8">
            <h3 className="lg:text-3xl font-red">Message</h3>
            <div className="flex gap-x-5 lg:gap-x-8 mt-3 font-red">
              <div>
                <p className="text-[#1475EA] text-[8px] mt-1 lg:text-base">Johhsan, Marks </p>
                <p className="text-[#1475EA] text-[8px] mt-1 lg:text-base">Adelia, Nadis</p>
                <p className="text-[#1475EA] text-[8px] mt-1 lg:text-base">Amelia, Laura </p>
                <p className="text-[#1475EA] text-[8px] mt-1 lg:text-base">Johhsan, Marks </p>
                <p className="text-[#1475EA] text-[8px] mt-1 lg:text-base">Adelia, Nadis </p>
                <p className="text-[#1475EA] text-[8px] mt-1 lg:text-base">Amelia, Laura </p>
              </div>
              <div>
                <p className="text-[8px] mt-1 lg:text-base">( Invoice Nomvember )</p>
                <p className="text-[8px] mt-1 lg:text-base">( Projact Assigment )</p>
                <p className="text-[8px] mt-1 lg:text-base">( Meeting Schedule )</p>
                <p className="text-[8px] mt-1 lg:text-base">( Invoice Nomvember )</p>
                <p className="text-[8px] mt-1 lg:text-base">( Projact Assigment )</p>
                <p className="text-[8px] mt-1 lg:text-base">( Meeting Schedule )</p>
              </div>
              <div>
                <p className="text-[8px] mt-1 lg:text-base">Status Update : Success</p>
                <p className="text-[8px] mt-1 lg:text-base">Presentation Material</p>
                <p className="text-[8px] mt-1 lg:text-base">Projact : Interoir Design</p>
                <p className="text-[8px] mt-1 lg:text-base">Projact : Interoir Design</p>
                <p className="text-[8px] mt-1 lg:text-base">Presentation Material</p>
                <p className="text-[8px] mt-1 lg:text-base">Status Update : Success</p>
              </div>



            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
