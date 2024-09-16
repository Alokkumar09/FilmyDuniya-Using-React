import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import app from "../firebase/firebase";
import swal from "sweetalert";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const Signup = () => {
  const [form, setForm] = useState({
    mobile: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");
  
  const generateRecaptha = async () => {
    window.recaptchaVerifier =await new RecaptchaVerifier(auth,'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });
  }

  const requestOtp = async() => {
      setLoading(true);
      generateRecaptha();
      let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+91${form.mobile}`, appVerifier)
        .then(confirmationResult => {
          window.confirmationResult = confirmationResult;
          swal({
            text: "OTP Sent",
            icon: "success",
            buttons: false,
            timer: 3000,
          });
          setOtpSent(true);
          setLoading(false);
        }).catch((error) => {
          console.log(error)
        })
  }
  

  return (
    <div className=" flex flex-col  mt-6  w-full items-center">
      <h1 className="text-3xl font-bold">Signup</h1>
      <div id="recaptcha-container"></div>
      {otpSent ? (
        <>
          <div class="p-2 sm:w-full md:w-1/3">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-300">
                OTP
              </label>
              <input
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                id="name"
                name="name"
                class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base h-12 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
              {loading ? <TailSpin height={20} color="white" /> : "Confirm-OTP"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div class="p-2 sm:w-full  md:w-1/3">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-300">
                Name
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base h-12 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 sm:w-full md:w-1/3">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-300">
                Mobile No.
              </label>
              <input
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                type="number"
                id="name"
                name="name"
                class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base h-12 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 sm:w-full  md:w-1/3">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-300">
                Password
              </label>
              <input
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base h-12 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="p-2 w-full">
              <button
                onClick={requestOtp

                }
                class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
              >
                {loading ? (
                  <TailSpin height={20} color="white" />
                ) : (
                  "Request OTP"
                )}
              </button>
            </div>
          </div>
          <div>
            <p>
              Already have an account{" "}
              <Link to={"/Login"}>
                <span className="text-blue-400">Login</span>
              </Link>
            </p>
          </div>
        </>
      )}
    <div id="recaptcha-container"></div>
    </div>
  );
};

export default Signup;
