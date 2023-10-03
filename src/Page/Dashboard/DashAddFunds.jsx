
const DashAddFunds = () => {
    return (
        <div className="h-screen mt-5">


            <div className="w-[430px] mx-auto bg-[#1973E3] pt-[30px] px-[30px] rounded-[12px]">
                <div className="bg-white rounded-[10px]">
                    <p className="text-center py-[52px] px-[13px] leading-[28px]">Take a screenshot after sending money to PayPal or CashApp. After that go to ticket option and enter.</p>
                </div>
                <p className="leading-[28px] text-white pt-[24px] pb-[32px]">
                    Subject: Your amount of money <br />
                    Message: Enter your remittance transaction ID <br />
                    Photo: Share screenshot of sending money <br />
                </p>
                <button className="py-[15px] pl-[15px] w-full bg-white text-left text-lg rounded-[30px] mb-[12px]" onClick={() => document.getElementById('my_modal_3').showModal()}>
                    PayPal
                </button>
                <button className="py-[15px] pl-[15px] w-full bg-white text-left text-lg rounded-[30px] mb-[51px]" onClick={() => document.getElementById('my_modal_4').showModal()}>
                    Cash App
                </button>
            </div>
            {/* Modal For Pay Pal */}
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">PayPal Account</h3>
                    <p className="py-4 text-center">moynulh576@gmail.com</p>
                </div>
            </dialog>
            {/* Modal For Cash Pay */}
            <dialog id="my_modal_4" className="modal ">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Cash App Account</h3>
                    <p className="py-4 text-center">$GoodPIMS</p>
                </div>
            </dialog>
            {/* <form className="flex flex-col w-full bg-white rounded-[10px]">
                <div className="w-full">
                    
                    <div className="mx-5 lg:mx-14 mt-12">
                        <p className='lg:text-xl font-semibold text-black ml-10 lg:ml-0 lg:mr-4 mb-2 font-red '>Amount</p>
                        <input className='h-14 px-4 dashShadow rounded-[10px] w-full bg-[#E5E5EF] focus:border-0 active:border-0' type="number" name='amount' />
                        <input type="submit" value="PAY" className="lg:text-2xl w-full lg:font-semibold bg-[#3186EC] rounded-[10px] text-center py-2 mt-6 lg:mt-12 text-white my-6 cursor-pointer" />
                    </div>
                </div>
                
            </form>

            <div className="bg-white col-span-2 dashShadow rounded-[10px] py-10 mt-6">
                <h4 className="ml-4 text-2xl font-bold">TRANSACTION</h4>
            </div> */}
        </div>
    );
};

export default DashAddFunds;