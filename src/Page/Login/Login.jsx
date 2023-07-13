import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;

    console.log(email, pass);
  };
  return (
    <div>
      <div className="lg:bg-[url('https://i.ibb.co/N12vB7w/Vector-1.png')] bg-no-repeat bg-bottom  ">
        <div className="bg-no-repeat bg-top bg-[url('https://i.ibb.co/FxPRyv5/au-logo-02-3.png')]">
          <h1 className="text-center text-[100px] my-20">Associative Upliftment</h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-20 ">
            <img className="w-40 lg:w-[672.89px]" src="https://i.ibb.co/qW3VMcL/bro.png" alt="" />
            <div>
              <h3 className="text-5xl font-semibold">Log in Now!!</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control my-10">
                  <p className="label mb-4">
                    <span className="label-text">Email:</span>
                  </p>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="Provide Your Email"
                    className="input input-bordered w-[458px] h-[74px] rounded-xl border border-black px-2"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <p  className="label mb-4">
                    <span className="label-text">Password</span>
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
                    className="input input-bordered w-[458px] h-[74px] rounded-xl border border-black px-2"
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is must</span>
                  )}
                </div>
                <p className="my-4">Forgot Password? Click here</p>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-black py-4 px-20 rounded-xl text-white hover:border-2 hover:border-black hover:text-black duration-500 hover:bg-transparent cursor-pointer "
                    type="submit"
                    value="Log in"
                  />
                </div>
              </form>
              <p className="font-medium pt-2 px-3 mt-6">
                New User?{" "}
                <Link to="/signup" className="text-black font-bold">
                  Sign up
                </Link>
              </p>
            </div>
          </div >
            <Link className="font-bold text-xl border-b-2 grid justify-center text-center mx-auto border-black mt-20 w-[142px]" to="/">              
                Go to Home
            </Link>
            <div className=" pb-20">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
