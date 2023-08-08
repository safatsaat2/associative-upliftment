import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const [phone, setPhone] = useState();
  const { createUser, emailVerification, user, logOut, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const number = data.number;
    const name = data.name;
    const email = data.email;
    const pass = data.password;
    createUser(email, pass)
      .then(() => {
        emailVerification().then(() => {
          updateUser(name, number).then(() => {
            const user = { name, number, email, verify: false };
            axios.post("https://associative-upliftment-server.vercel.app/users", user).then(() => {
              logOut();
              navigate("/login");
              Swal.fire("Check your email to verify");
            });
          });
        });
      })
      .catch((err) => console.log(err));

    console.log(email, pass, number);
  };
  if (user) {
    return (
      <div className="w-full h-full mx-auto my-auto">
        You are Already sign in!!
      </div>
    );
  }
  {
    return (
      <div>
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
                <h3 className="text-5xl font-semibold text-[#FFE500]">Register Now!!</h3>
                <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control my-10">
                    <p className="label mb-4">
                      <span className="label-text text-white">Name:</span>
                    </p>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Provide Your Name"
                      className="input input-bordered w-full lg:w-[458px] h-[74px] rounded-xl border border-black px-2"
                    />
                    {errors.email && (
                      <p className="text-red-500">Name is required</p>
                    )}
                  </div>
                  <div className="form-control my-10">
                    <p className="label mb-4">
                      <span className="label-text text-white">Phone:</span>
                    </p>
                    <PhoneInput
                      defaultCountry="US"
                      placeholder="Enter phone number"
                      {...register("number", { required: true })}
                      value={phone}
                      onChange={setPhone}
                      countries={[
                        "RU",
                        "UA",

                        "AU",
                        "AT",

                        "BY",
                        "BE",
                        "BO",

                        "BG",
                        "US",
                        "GB",

                        "CH",
                        "SE",
                        "ES",
                        "ZA",
                        "SI",
                        "SK",

                        "RO",
                        "PT",
                        "PL",
                        "PE",
                        "NO",
                        "NZ",
                        "NL",
                        "MX",
                        "LV",
                        "KR",
                        "KE",
                        "JO",
                        "JP",
                        "JM",
                        "IT",
                        "IE",
                        "IS",
                        "HU",
                        "GR",
                        "DE",
                        "GE",
                        "FR",
                        "FI",
                        "FJ",
                        "EE",
                        "DK",
                        "CZ",
                        "CR",
                        "CA",
                      ]}
                      className="w-full lg:w-[458px] h-[74px] rounded-xl border text-black bg-white px-2"
                    />

                    {errors.email && (
                      <span className="text-red-500">Phone is required</span>
                    )}
                  </div>
                  <div className="form-control my-10">
                    <p className="label mb-4">
                      <span className="label-text text-white">Email:</span>
                    </p>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Provide Your Email"
                      className="input input-bordered w-full lg:w-[458px] h-[74px] rounded-xl border border-black px-2"
                    />
                    {errors.email && (
                      <p className="text-red-500">Email is required</p>
                    )}
                  </div>
                  <div className="form-control">
                    <p className="label mb-4">
                      <span className="label-text text-white">Password</span>
                    </p>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                      placeholder="Provide Your Password"
                      className="input input-bordered w-full lg:w-[458px] h-[74px] rounded-xl border border-black px-2"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 characters
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        Password must be less than 20 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one Uppercase one lower case, one
                        number and one special character.
                      </p>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn bg-black py-4 px-20 rounded-xl text-white hover:border-2 hover:border-[#FFE500] hover:text-[#FFE500] duration-500 hover:bg-transparent cursor-pointer "
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <p className="font-medium pt-2 px-3 mt-6">
                  Already User?{" "}
                  <Link to="/login" className="text-white hover:text-[#FFE500] duration-500 hover:bg-transparent cursor-pointer font-bold">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            <div className="py-20">
            <Link
              className="font-bold text-xl border-b-2 grid justify-center text-center mx-auto border-white  w-[142px]"
              to="/"
            >
              Go to Home
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
