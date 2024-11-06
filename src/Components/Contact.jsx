import React from "react";
import Location from "../assets/location.png";
import Phone from "../assets/phone.png";
import Email from "../assets/mail.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import X from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <div id="contact" className="flex bg-gray-400 min-h-screen justify-center">
      <div className="flex h-screen flex-col items-center relative">
        <p className="text-3xl flex justify-center mb-8 font-semibold mt-4">
          Contact
        </p>
        <div className="flex flex-row items-center ">
          <div className="flex items-center relative group mt-4  justify-around">
            <div className="w-96 h-52 m-4 flex justify-center transition-transform duration-300 transform group-hover:-translate-y-2 bg-gray-100 border-b-4 border-red-400 p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center flex-col">
                <img className="h-10 w-10 mb-2 " src={Location}></img>
                <h1 className="font-semibold text-xl">Address</h1>
                <hr className="my-2 w-18 border-t-2 border-gray-300" />
                <p className="flex justify-center ml-6">
                  Agraharam , sithalavai , Karur District, Pin NO:639102
                </p>
              </div>
            </div>
          </div>
          <div className="relative group mt-4 justify-around">
            <div className="w-96 h-52 m-4 flex justify-center transition-transform duration-300 transform group-hover:-translate-y-2 bg-gray-100 border-b-4 border-red-400 p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center flex-col">
                <img
                  className="h-10 w-10 mb-2 rounded-full ml-2"
                  src={Phone}
                ></img>
                <h1 className="font-semibold text-xl">Phone</h1>
                <hr className="my-2 w-18 border-t-2 border-gray-300" />
                <p>7695967526</p>
              </div>
            </div>
          </div>
          <div className="relative group mt-4 justify-around">
            <div className="w-96 h-52 m-4 flex justify-center transition-transform duration-300 transform group-hover:-translate-y-2 bg-gray-100 border-b-4 border-red-400 p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center flex-col">
                <img className="h-10 w-10 mb-2 ml-1" src={Email}></img>
                <h1 className="font-semibold text-xl">Email</h1>
                <hr className="my-2 w-18 border-t-2 border-gray-300" />
                <p>shmragul@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
        <a href="https://www.instagram.com/ragul_idc/" className="h-16 w-16  m-8 mt-16">
        <img className="rounded-full" src={Instagram} alt="instagram"></img>
        </a>
        <a href="https://www.facebook.com/ragul.sham.10?mibextid=ZbWKwL" className="h-16 w-16 m-8 mt-16">
        <img className=" rounded-full " src={Facebook} alt="twitter"></img>
        </a>
        <a href="https://twitter.com/FriendzT52939?t=v19Epkdu-t3vZUyYk6Va1w&amp;s=09" className="h-16 w-16 m-8 mt-16">
        <img className=" rounded-full " src={X} alt="twitter"></img>
        </a>
        <a href="https://www.linkedin.com/in/ragul-9b7833285" className="h-16 w-16 m-8 mt-16">
        <img className=" rounded-full " src={Linkedin} alt="linkedin"></img>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
