
const DashAddFunds = () => {
    return (
        <div>
            <form className="flex flex-col w-full">
                <div className="w-full">
                    <p className='text-xl font-semibold text-black mr-4 mb-2'>Amount:</p>
                    <input className='h-14 w-full dashShadow rounded-[10px] bg-white' type="text" name='subject' />
                </div>
                <input type="submit" value="Submit" className="text-2xl font-semibold bg-[#FFE500] rounded-[10px] text-center py-4 w-[230px]  my-6 cursor-pointer" />
            </form>

            <div className="bg-white col-span-2 dashShadow rounded-[10px] py-10">
                <h4 className="ml-4 text-2xl font-bold">TRANSACTION</h4>
            </div>
        </div>
    );
};

export default DashAddFunds;