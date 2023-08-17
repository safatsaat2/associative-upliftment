
const DashComplainBox = () => {
    return (
        <>
            <h1 className="lg:text-xl font-bold text-black mb-4 font-red">Must Read Before Creating Tickets!</h1>
            <div className="mb-6">
                <p className="text-[10px] mb-2 text-black font-red"><span className="text-sm font-semibold font-red">Speedy Response Time:</span> Expect to hear from our dedicated support team within just 1 to 24 hours max! We`re committed to resolving your query swiftly.</p>
                <p className="text-[10px] mb-2 text-black font-red"><span className="text-sm font-semibold font-red">Patience is Key:</span> After creating your ticket, simply sit back and relax. Our experts are working diligently to provide you with the assistance you need.</p>
                <p className="text-[10px] mb-2 text-black font-red"><span className="text-sm font-semibold font-red">One Ticket, One Solution:</span> To ensure efficient handling of your concern, please avoid creating multiple tickets for the same issue. Our team is here to streamline the process for you.</p>
                <p className="text-[10px] mb-2 text-black font-red font-semibold">We're here to make your experience smooth and hassle-free. Your satisfaction is our priority! 🌟</p>
            </div>
            <form className="flex flex-col justify-center items-center rounded-[40px] bg-white">
                <div className="w-full">
                    <div className=" mx-4 lg:mx-14 mt-6">
                        <p className='lg:text-xl font-red font-semibold text-black ml-8 lg:ml-0 lg:mr-4 mb-2'>Subject</p>
                        <input className='h-14 w-5/6 ml-5 lg:w-full lg:ml-0 dashShadow rounded-[10px] bg-[#E5E5EF]' type="text" name='subject' />
                    </div>
                    <div className="mx-4 lg:mx-14 ">
                        <p className='lg:text-xl font-semibold text-black ml-8 lg:ml-0 lg:mr-4 mb-2 mt-4 font-red'>Message</p>
                        <textarea className="textarea w-5/6 ml-5 lg:w-full lg:ml-0 textarea-ghost bg-[#E5E5EF] h-64 dashShadow rounded-[10px]  focus:border-none " placeholder="Write your complain..."></textarea>
                        <input type="submit" value="Submit Ticket" className="lg:text-2xl lg:font-semibold bg-[#3186EC] text-white rounded-[10px] text-center w-full py-4 mx-auto my-6 font-red" />
                    </div>
                    
                </div>
                
            </form>
            <div className="bg-white col-span-2 dashShadow rounded-[10px] mt-6 py-10">
                <h4 className="ml-4 text-2xl font-bold">TRANSACTION</h4>
            </div>
        </>
    );
};

export default DashComplainBox;