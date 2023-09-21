import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DashComplainBox = () => {

    const navigate = useNavigate()
    // Handling Subject
    const [subject, setSubject] = useState("")
    const handleSubject = (e) => {
        setSubject(e.target.value)
    }

    // Handling Message
    const [message, setMessage] = useState("")
    const handleMessage =(e) =>{
        setMessage(e.target.value)
    }

    // Handle Transaction
    const [transaction, setTransaction] = useState("")
    const handleTransction = (e) =>{
        setTransaction(e.target.value)
    }
    // Handle image
    const [image, setImage] = useState("")
    const handleImage =(e) =>{
        const img = e.target.files[0]
        const formData = new FormData();
        formData.append("image", img);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`

        fetch(url, {
            method: "POST",
            body: formData,
        }).then(res => res.json()).then(imageData=>{
            setImage(imageData.data.display_url)
        })
    }

    // Handle Submit

    const handleSubmit = (e) =>{
        e.preventDefault()
        const info = {subject, message, transaction, image}
        if(subject !== "" && message !== "" && transaction !== "" && image !== ""){
            axios.post("http://localhost:7000/tickets", info)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                  Swal.fire(
                    'Your funds will be add soon',
                    'Success'
                  )
                  navigate('/dashboard/customorder')
                }  
              })
        }
        Swal.fire(
            'Select All',
            'Failed'
          )
        
    }
    
    return (
        <div>
            <h1 className="lg:text-[36px] font-bold text-black mb-4 font-red text-center">Must Read Before Creating Tickets!</h1>
            <div className="mb-6 w-[864px] mx-auto mt-[48px]">
                <p className=" mb-2 text-black font-red text-center"><span className="text-lg font-semibold font-red">Speedy Response Time:</span> Expect to hear from our dedicated support team within just 1 to 24 hours max! We`re committed to resolving your query swiftly.</p>
                <p className=" mb-2 text-black font-red text-center"><span className="text-lg font-semibold font-red">Patience is Key:</span> After creating your ticket, simply sit back and relax. Our experts are working diligently to provide you with the assistance you need.</p>
                <p className=" mb-2 text-black font-red text-center"><span className="text-lg font-semibold font-red">One Ticket, One Solution:</span> To ensure efficient handling of your concern, please avoid creating multiple tickets for the same issue. Our team is here to streamline the process for you.</p>
                <p className=" mb-2 text-black font-red text-center font-semibold">We're here to make your experience smooth and hassle-free. Your satisfaction is our priority! 🌟</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[864px] mx-auto">
                <div className="w-full">
                    <div className=" mx-4 mt-6">
                        <p className='lg:text-xl font-red font-semibold text-black ml-8 lg:ml-0 lg:mr-4 mb-2'>Subject</p>
                        <input onChange={handleSubject} className='h-14 w-5/6 ml-5 lg:w-full lg:ml-0 dashShadow rounded-[10px] bg-[#E5E5EF] pl-2' type="text" name='subject' placeholder="Write Your Subject..." />
                    </div>
                    <div className="mx-4 ">
                        <p className='lg:text-xl font-semibold text-black ml-8 lg:ml-0 lg:mr-4 mb-2 mt-4 font-red'>Message</p>
                        <textarea onChange={handleMessage} className="textarea w-5/6 ml-5 lg:w-full lg:ml-0 textarea-ghost bg-[#E5E5EF] dashShadow rounded-[10px]  focus:border-none " placeholder="Write your complain..."></textarea>
                        <p className='lg:text-xl font-red font-semibold text-black ml-8 lg:ml-0 lg:mr-4 mb-2'>Transaction</p>
                        <input onChange={handleTransction} className='h-14 w-5/6 ml-5 lg:w-full lg:ml-0 dashShadow rounded-[10px] bg-[#E5E5EF] pl-2' type="text" name='transaction' placeholder="Write Your Transaction id..." />
                        <p className='lg:text-xl font-red font-semibold text-black ml-8 lg:ml-0 lg:mr-4 mb-2'>Screenshot</p>
                        <input className='bg-[#E5E5EF]' type="file" accept="image/*" onChange={handleImage} name='img' />
                        <input onClick={handleSubmit} type="submit" value="Submit Ticket" className="lg:text-2xl lg:font-semibold bg-[#3186EC] text-white rounded-[10px] text-center w-full py-4 mx-auto my-6 font-red" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DashComplainBox;