import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="bg-white py-4 m-1 ">
        <div className="container mx-auto flex justify-between items-center ">
          <Link to="/" className="bg-green-950 text-purple-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-purple-400 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Hello to AuthFlow Pro
          </Link>

          <nav>
            <div>
              <Link
                to="/login"
                className="text-black mr-4 hover:text-green-100"
              >
                <button className="bg-green-950 text-purple-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-purple-500 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>{" "}
                  Login
                </button >
              </Link>
              <Link to="/signup" className="text-black hover:text-green-100">
                <button className="bg-green-950 text-purple-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-purple-500 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>Sign Up</button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="flex items-center justify-center h-screen">
        <h6 className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center &">
          This authentication management application, based on roles and
          permissions, offers a robust and scalable structure with its monorepo
          architecture and MVC model. Utilizing Redux ensures efficient
          management of the application's global state, while well-defined data
          modeling ensures precise management of users, roles, and permissions.
          With clear API documentation using Swagger, as well as rigorous unit
          and integration testing, this application guarantees security,
          reliability, and ease of maintenance.
        </h6>
      </div>
    </>
  );
};

export default Home;
