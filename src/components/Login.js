import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    mobile:"",
    password:""
  });

  return (
    <div className=" flex flex-col  mt-6  w-full items-center">
      <h1 className="text-3xl font-bold">Login</h1>

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
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
            {loading ? <TailSpin height={20} color="white" /> : "Submit"}
          </button>
        </div>
      </div>
      <div>
        <p>Do not have account  <Link to={'/Signup'}>
          <span className="text-blue-400">Sign Up</span>
          </Link>
          </p>
      </div>
    </div>
  );
};

export default Login;
