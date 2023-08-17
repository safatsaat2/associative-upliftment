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
          navigate("/dashboard");
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
      <div className="relative lg:-mt-10">
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
        <div className="bg-[url('https://i.ibb.co/DY2ZQ1h/Rectangle-6401.png')] bg-cover bg-center lg:-mt-10 text-white">
          <div className="">
            <h1 className="text-center  font-bold text-2xl leading-normal lg:text-[60px] mt-10 lg: pt-20 hidden lg:block">
              International Associative Upliftment <span className="text-[#FFE500]">(IAU)</span>
            </h1>
            <p className="text-lg lg:text-2xl text-center mb-10 hidden lg:block">Global Service Company</p>
            <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto">
              <img
                className="w-80 lg:w-[671px] rounded-md mb-10 lg:my-0 hidden lg:block"
                src="https://i.ibb.co/ydQThpd/rafiki.png"
                alt=""
              />
              <div className="mt-20 lg:mt-0">
                <h3 className="text-5xl font-semibold text-[#FFE500]">Log in Now!!</h3>
                <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control my-10">
                    <p className="label mb-4">
                      <span className="label-text text-white">Email:</span>
                    </p>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      placeholder="Provide Your Email"
                      className="input text-black input-bordered w-full lg:w-[458px] h-[74px] rounded-xl border border-black px-2"
                    />
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <p className="label mb-4">
                      <span className="label-text text-white">Password</span>
                    </p>
                    <input
                      type="password"
                      {...register(
                        "password",
                        { required: true },
                        {
                          pattern: /[A-Za-z]{3}/,
                        }
                      )}
                      placeholder="Provide Your Password"
                      className="input text-black input-bordered w-full lg:w-[458px] h-[74px] rounded-xl border border-black px-2"
                    />
                    {errors.password && (
                      <span className="text-red-500">Password is must</span>
                    )}
                  </div>
                  <p className="my-4">Forgot Password? Click here</p>
                  <div className="form-control mt-6">
                    <input
                      className="btn bg-black py-4 px-20 rounded-xl text-white hover:border-2 hover:border-[#FFE500] hover:text-[#FFE500] duration-500 hover:bg-transparent cursor-pointer "
                      type="submit"
                      value="Log in"
                    />
                  </div>
                </form>
                <p className="font-medium pt-2 px-3 mt-6">
                  New User?{" "}
                  <Link to="/signup" className="text-white hover:text-[#FFE500] duration-500 hover:bg-transparent cursor-pointer font-bold">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
            <Link
              className="font-bold text-xl border-b-2 grid justify-center text-center mx-auto border-[#FFE500] mt-20 w-[142px]"
              to="/"
            >
              Go to Home
            </Link>
            <div className=" pb-20"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
