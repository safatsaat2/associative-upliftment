
const DashAddFunds = () => {
    return (
        <div>
            <form className="flex flex-col w-full bg-white rounded-[10px]">
                <div className="w-full">
                    
                    <div className="mx-14 mt-12">
                        <p className='text-xl font-semibold text-black mr-4 mb-2 font-red '>Amount</p>
                        <input className='h-14 px-4 dashShadow rounded-[10px] w-full bg-[#E5E5EF] focus:border-0 active:border-0' type="number" name='amount' />
                        <input type="submit" value="PAY" className="text-2xl w-full font-semibold bg-[#3186EC] rounded-[10px] text-center  py-2 mt-12 text-white my-6 cursor-pointer" />
                    </div>
                </div>
                
            </form>

            <div className="bg-white col-span-2 dashShadow rounded-[10px] py-10 mt-6">
                <h4 className="ml-4 text-2xl font-bold">TRANSACTION</h4>
            </div>
        </div>
    );
};

export default DashAddFunds;