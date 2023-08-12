
const DashComplainBox = () => {
    return (
        <>
            <h1 className="text-xl font-bold text-black mb-4">Must Read Before Creating Tickets!</h1>
            <div className="mb-6">
                <p className="mb-2 text-black"><span className="font-semibold">Speedy Response Time:</span> Expect to hear from our dedicated support team within just 1 to 24 hours max! We're committed to resolving your query swiftly.</p>
                <p className="mb-2 text-black"><span className="font-semibold">Patience is Key:</span> After creating your ticket, simply sit back and relax. Our experts are working diligently to provide you with the assistance you need.</p>
                <p className="mb-2 text-black"><span className="font-semibold">One Ticket, One Solution:</span> To ensure efficient handling of your concern, please avoid creating multiple tickets for the same issue. Our team is here to streamline the process for you.</p>
                <p className="mb-2 text-black font-semibold">We're here to make your experience smooth and hassle-free. Your satisfaction is our priority! 🌟</p>
            </div>
            <form className="flex flex-col justify-center items-center w-full">
                <div className="w-full">
                    <p className='text-xl font-semibold text-black mr-4 mb-2'>Subject:</p>
                    <input className='h-14 w-full dashShadow rounded-[10px] bg-white' type="text" name='subject' />
                </div>
                <div className="w-full">
                    <p className='text-xl font-semibold text-black mr-4 mb-2 mt-4'>Message:</p>
                    <textarea className="textarea textarea-ghost bg-white h-64 dashShadow rounded-[10px]  focus:border-none w-full" placeholder="Write your complain..."></textarea>
                </div>
                <input type="submit" value="Submit" className="text-2xl font-semibold bg-[#FFE500] rounded-[10px] text-center py-4 w-[230px] mx-auto my-6" />
            </form>
        </>
    );
};

export default DashComplainBox;