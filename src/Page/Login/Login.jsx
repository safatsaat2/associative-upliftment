import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Icon } from "@iconify/react";

const Login = () => {
  const [modal, setModal] = useState(false);
  const { signIn, logOut, user, emailVerification } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    signIn(email, pass)
      .then((res) => {
        const emailVerify = res.user.emailVerified;
        if (emailVerify === false) {
          setModal(true);
          logOut()
        } else {
          navigate("/dashboard/home");
        }
      })
      .catch((err) => {
        console.log(err)
        reset()
      });
      
  };

  const againVerify = () => {
    emailVerification().then(() => {
      setModal(false)
    })
  }


  const closeModal = () => setModal(!modal);

  if (user) {
    return <div className="w-full h-full mx-auto my-auto">You are Already sign in!!</div>;
  }
  {
    return (
      <div className="relative">
        <div
          className={`w-full ${modal === true ? "block duration-1000" : "hidden"
            } absolute left-0 right-0 top-0 bottom-0 lg:h-[300px] mx-2 lg:w-[400px] lg:mx-auto lg:my-auto bg-slate-50 drop-shadow-2xl rounded-lg flex flex-col justify-center items-center`}
        >
          <Icon
            onClick={closeModal}
            className="cursor-pointer absolute top-0 right-0 mr-5 mt-5"
            icon="maki:cross"
          />
          <h1 className="text-2xl my-2 text-center font-bold">
            Check your Email
          </h1>
          <p className="text-center mt-5">Please Verify Your Email</p>
          <button onClick={againVerify} className="btn bg-black text-white hover:text-black mt-5">
            Again Send Verification
          </button>
        </div>
        <div className=" shadow-2xl w-[430px] lg:mt-32 mx-auto px-[30px] pt-[40px] my-10 text-black rounded-[12px]">
          <div className="">
            <div className="flex justify-center items-center gap-5">
            <img src="https://i.ibb.co/z2b0DFN/Whats-App-Image-2023-09-05-at-21-37-33.jpg" className='w-10 rounded-full' alt="" />
            <h1 className="text-center text-2xl">
              Associative Upliftment
            </h1>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="mt-[26px]">
                <h3 className="text-[28px] font-semibold text-center">Sign in</h3>

                <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control my-[20px]">
                    
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      placeholder="Email"
                      className="input text-black input-bordered w-full h-[60px] rounded-[30px] border border-[#191B1D26] px-5"
                    />
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    
                    <input
                      type="password"
                      {...register(
                        "password",
                        { required: true },
                        {
                          pattern: /[A-Za-z]{3}/,
                        }
                      )}
                      placeholder="Password"
                      className="input text-black input-bordered w-full h-[60px] rounded-[30px] border border-[#191B1D26] px-5"
                    />
                    {errors.password && (
                      <span className="text-red-500">Password is must</span>
                    )}
                  </div>
                  <div className="form-control mt-[20px]">
                    <input
                      className="btn bg-[#1973E3] py-4 px-20 rounded-[30px] text-white hover:border-2 hover:border-[#1973E3] hover:text-[#1973E3] duration-500 hover:bg-transparent cursor-pointer "
                      type="submit"
                      value="Log in"
                    />
                  </div>
                </form>
                <p className="font-medium pt-2 px-3 mt-[20px]">
                  Don't have Account?{" "}
                  <Link to="/signup" className="text-black hover:text-[#1973E3] duration-500 hover:bg-transparent cursor-pointer font-bold">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
            <div className=" pb-12"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
