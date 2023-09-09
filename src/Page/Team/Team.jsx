import { useState } from "react";
import { useParams } from "react-router-dom";
import BeInContact from "../../Components/BeInContact";
import HowItWorks from "../../Components/HowItWorks";

const Team = ({ children }) => {

    const [data, setData] = useState([])
    const { id } = useParams()

    fetch('/team.json')
        .then(data => data.json())
        .then(data => setData(data))
    const [fillteredData] = data.filter((data) => data.id === id)

    return (
        <>
            <div className="mx-2 lg:mx-auto">
                {/* <h1 className="text-2xl lg:text-4xl lg:text-[64px] font-semibold font-sans text-center my-4 lg:my-8">
                {fillteredData?.teamName}
            </h1>
            <h2 className="text-lg lg:text-4xl font-medium font-sans text-center mt-4 mb-6">
                Speacialist At {fillteredData?.industry}
            </h2> */}
                <img src={fillteredData?.banner} alt="" className="mb-8 h-[400px] w-full hidden lg:block" />
                <img src={fillteredData?.mobileBanner} alt="" className="my-4 lg:hidden" />
                <div className="max-w-7xl mx-auto">


                    <HowItWorks />

                    <BeInContact title="Be in control. Keep in contact." image="https://i.ibb.co/7rhFvBX/Rectangle-6489-2.png" description="Use our collaboration tools to work efficiently with your team. Share files, chat in real time, monitor progress, and so much more." firstBoxIcon="https://i.ibb.co/fqCst7B/Rectangle-6490.png" firstBoxTitle="Group Chat" firstBoxDescription="You can group chat with your team to ask questions, share feedback, and get constant updates on the progress of your work." secondBoxIcon="https://i.ibb.co/LdJyCfW/Rectangle-6491.png" secondBoxTitle="Companion team" secondBoxDescription="Manage your project with the team. The Associative Upliftment team makes on-the-go collaboration a breeze." />

                    <BeInContact title="Safe and Hire" image="https://i.ibb.co/wMvtvkv/Rectangle-6489-3.png" description="Associative Upliftment is a community that values your trust and safety as our number one priority. Our representatives are available to assist you with any issues." firstBoxIcon="https://i.ibb.co/rf7ywWm/Rectangle-6490-1.png" firstBoxTitle="Hire with confidence" firstBoxDescription="Hire safely through our system. Only hold on to the team when you are satisfied with the work." secondBoxIcon="https://i.ibb.co/0rYG56M/Rectangle-6491-1.png" secondBoxTitle="Support team" secondBoxDescription="Support team
                    We're always here to help. Our representatives are available to assist you with any issues." />



                    <div className="mx-8">
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info1}
                    </p>
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info2}
                    </p>
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info3}
                    </p>
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8 my-10 mx-auto ">
                        <img className="h-[300px] w-full rounded-md" src={fillteredData?.img2} alt="" />
                        <img className="h-[300px] w-full rounded-md" src={fillteredData?.img3} alt="" />
                        <img className="h-[300px] w-full rounded-md" src={fillteredData?.img1} alt="" />

                    </div>
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info4}
                    </p>
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info5}
                    </p>
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info6}
                    </p>
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info7}
                    </p>
                    <p className="mb-4 text-sm lg:text-base">
                        {fillteredData?.info8}
                    </p>
                    </div>
                </div>
            </div>
            <div className="mt-20">{children}</div>
        </>
    );
};

export default Team;