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
            axios.post("http://localhost:7000/users", user).then(() => {
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
        <div className="lg:bg-[url('https://i.ibb.co/N12vB7w/Vector-1.png')] bg-no-repeat bg-bottom  ">
          <div className="bg-no-repeat bg-top bg-[url('https://i.ibb.co/FxPRyv5/au-logo-02-3.png')]">
            <h1 className="text-center font-bold text-[80px] my-20">
              International Associative Upliftment (IAU)
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-20 ">
              <img
                className="w-40 lg:w-[672.89px]"
                src="https://i.ibb.co/qW3VMcL/bro.png"
                alt=""
              />
              <div>
                <h3 className="text-5xl font-semibold">Register Now!!</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control my-10">
                    <p className="label mb-4">
                      <span className="label-text">Name:</span>
                    </p>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Provide Your Name"
                      className="input input-bordered w-[458px] h-[74px] rounded-xl border border-black px-2"
                    />
                    {errors.email && (
                      <p className="text-red-500">Name is required</p>
                    )}
                  </div>
                  <div className="form-control my-10">
                    <p className="label mb-4">
                      <span className="label-text">Phone:</span>
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
                      className="border text-trans"
                    />

                    {errors.email && (
                      <span className="text-red-500">Phone is required</span>
                    )}
                  </div>
                  <div className="form-control my-10">
                    <p className="label mb-4">
                      <span className="label-text">Email:</span>
                    </p>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Provide Your Email"
                      className="input input-bordered w-[458px] h-[74px] rounded-xl border border-black px-2"
                    />
                    {errors.email && (
                      <p className="text-red-500">Email is required</p>
                    )}
                  </div>
                  <div className="form-control">
                    <p className="label mb-4">
                      <span className="label-text">Password</span>
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
                      className="input input-bordered w-[458px] h-[74px] rounded-xl border border-black px-2"
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
                      className="btn bg-black py-4 px-20 rounded-xl text-white hover:border-2 hover:border-black hover:text-black duration-500 hover:bg-transparent cursor-pointer "
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <p className="font-medium pt-2 px-3 mt-6">
                  Already User?{" "}
                  <Link to="/login" className="text-black font-bold">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            <Link
              className="font-bold text-xl border-b-2 grid justify-center text-center mx-auto border-black mt-20 w-[142px]"
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

export default SignUp;
