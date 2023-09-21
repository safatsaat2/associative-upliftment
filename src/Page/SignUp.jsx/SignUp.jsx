import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
      .catch((err) => {
        console.log(err)
        reset()
      });

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
        <div className="shadow-2xl w-[430px] mx-auto px-[30px] pt-[40px] my-10 text-black rounded-[12px]">
          <div className="">
            <div className="flex justify-center items-center gap-5">
              <img src="https://i.ibb.co/z2b0DFN/Whats-App-Image-2023-09-05-at-21-37-33.jpg" className='w-10 rounded-full' alt="" />
              <h1 className="text-center text-2xl">
                Associative Upliftment
              </h1>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="mt-[26px]">
                <h3 className="text-[28px] font-semibold text-center">Sign Up</h3>
                <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control my-[20px]">
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Provide Your Name"
                      className="input text-black input-bordered w-full h-[60px] rounded-[30px] border border-[#191B1D26] px-5"
                    />
                    {errors.email && (
                      <p className="text-red-500">Name is required</p>
                    )}
                  </div>
                  <div className="form-control mt-[20px]">
                    
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
                      className="w-full h-[60px] rounded-[30px] text-black border border-[#191B1D26] px-5"
                    />

                    {errors.email && (
                      <span className="text-red-500">Phone is required</span>
                    )}
                  </div>
                  <div className="form-control mt-[20px]">
                    
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Provide Your Email"
                      className="input text-black input-bordered w-full h-[60px] rounded-[30px] border border-[#191B1D26] px-5"
                    />
                    {errors.email && (
                      <p className="text-red-500">Email is required</p>
                    )}
                  </div>
                  <div className="form-control mt-[20px]">
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
                      className="input text-black input-bordered w-full h-[60px] rounded-[30px] border border-[#191B1D26] px-5"
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
                  <div className="form-control mt-[20px]">
                    <input
                      className="btn bg-[#1973E3] py-4 px-20 rounded-[30px] text-white hover:border-2 hover:border-[#1973E3] hover:text-[#1973E3] duration-500 hover:bg-transparent cursor-pointer"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <p className="font-medium pt-2 px-3 mt-[20px]">
                  Already User?{" "}
                  <Link to="/login" className="text-black hover:text-[#1973E3] duration-500 hover:bg-transparent cursor-pointer font-bold">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            <div className=" pb-12">
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
