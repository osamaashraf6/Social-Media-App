import React, { useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
const UserInfo = () => {
  const [open, setOpen] = useState(false);
  const currentUser = true;
  return (
    <>
      <section className="mb-5">
        <div className="px-6  pt-28 py-4 rounded-xl bg-white shadow-lg flex flex-col gap-5 relative">
          <div className="absolute top-[-100px] left-[50%] translate-x-[-50%] text-center">
            <div className="w-[160px] h-[160px] rounded-full border-[6px] border-white mb-3 shadow-md">
              <img
                src="https://images.pexels.com/photos/1079783/pexels-photo-1079783.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="userprofile-img"
                className="responsive-img rounded-full"
              />
            </div>
            <h2 className="capitalize  font-bold text-lg">collins fischer</h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="socials-icons flex gap-3 text-gray-400">
              <Link to="">
                <FacebookRoundedIcon />
              </Link>
              <Link to="">
                <InstagramIcon />
              </Link>
              <Link to="">
                <TwitterIcon />
              </Link>
              <Link to="">
                <LinkedInIcon />
              </Link>
              <Link to="">
                <TelegramIcon />
              </Link>
            </div>
            <div className="flex gap-4 text-gray-500">
              <div className="flex gap-1 items-center">
                <LocationOnIcon />
                <span className="">cameron</span>
              </div>
              <div className="flex gap-1 items-center">
                <LanguageIcon />
                <span className="">lama.dev</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button>
                <EmailOutlinedIcon />
              </button>
              <button>
                <MoreVertIcon />
              </button>
            </div>
          </div>
          <div className="text-center">
            {currentUser ? (
              <button
                onClick={() => setOpen(!open)}
                className="p-2 px-3 rounded bg-indigo-500 text-white font-medium text-xs"
              >
                Update
              </button>
            ) : (
              <button className="p-2 px-3 rounded bg-indigo-500 text-white font-medium text-xs">
                Following
              </button>
            )}
          </div>
        </div>
      </section>
      {/*  */}
      <div
        className={`parmodal  top-0 left-0 w-full h-full justify-center pt-[82px] bg-[#000000cc] z-50 fixed ${
          open ? "flex " : "hidden"
        } `}
      >
        <div className="parmodal_modal overflow-y-scroll bg-white w-[700px] h-[586px] pr-4 pl-10 pt-2 pb-8 ">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="p-1 text-white bg-red-500 text-xs"
            >
              close
            </button>
          </div>
          <h2 className="text-2xl text-gray-300 font-bold pb-6">
            Upade Your Profile
          </h2>
          <from className="flex flex-col gap-4 pr-6">
            <div className="imgs flex gap-11">
              <div className="">
                <h3 className="text-gray-500 text-sm font-medium pb-2">
                  cover picture
                </h3>
                <div className="border w-[140px] h-[18vh] relative">
                  <img
                    src="https://images.pexels.com/photos/1079783/pexels-photo-1079783.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="responsive-img"
                  />
                  <button className="text-gray-200  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <label className="cursor-pointer" htmlFor="cover">
                      <CloudUploadIcon />
                    </label>
                    <input type="file" className="hidden" id="cover" />
                  </button>
                </div>
              </div>
              <div className="">
                <h3 className="text-gray-500 text-sm font-medium pb-2">
                  profile picture
                </h3>
                <div className="border w-[140px] h-[18vh] relative">
                  <img
                    src="https://images.pexels.com/photos/1079783/pexels-photo-1079783.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="responsive-img"
                  />
                  <button className="text-gray-200  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <label className="cursor-pointer" htmlFor="profile">
                      <CloudUploadIcon />
                    </label>
                    <input type="file" className="hidden" id="profile" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Email
              </label>
              <input
                type="email"
                className="text-sm w-full border-0 border-b"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Password
              </label>
              <input
                type="password"
                className="text-sm w-full border-0 border-b"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Name
              </label>
              <input
                type="text"
                className="text-sm w-full border-0 border-b"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Counrty / City
              </label>
              <input
                type="text"
                className="text-sm w-full border-0 border-b"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 pb-4 text-xs font-medium">
                Website
              </label>
              <input
                type="text"
                className="text-sm w-full border-0 border-b"
                required
              />
            </div>
            <button className="p-1 bg-blue-500 text-white text-sm">
              Update
            </button>
          </from>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
