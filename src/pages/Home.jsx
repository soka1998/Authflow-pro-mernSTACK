import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/main.svg";

const Home = () => {
  return (
    <>
      <header className="bg-white py-4 m-1 ">
        <div className="container mx-auto flex justify-between items-center ">
          <Link
            to="/"
            className="bg-violet-700 text-white border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-purple-400 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Hello to AuthFlow Pro
          </Link>

          <nav>
            <div>
              <Link
                to="/login"
                className="text-white mr-4 hover:text-green-100"
              >
                <button className="bg-violet-700 950 text-white border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-violet-500 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>{" "}
                  Login
                </button>
                
              </Link>
              <Link to="/signup" className="text-black hover:text-green-100">
                <button className="bg-violet-700 text-white border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-violet-700-500 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="flex items-center">
        <img src={main} alt="job hunt" className="img main-img" />
        <div className="flex-1">
          <h6 className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            This authentication management application adopts a monorepo
            architecture and MVC model for scalability. Redux efficiently
            manages global state, and clear data modeling ensures precise user,
            role, and permission management. API documentation with Swagger and
            rigorous testing ensure security, reliability, and maintainability.
          </h6>
        </div>
      </div>
    </>
  );
};

export default Home;
