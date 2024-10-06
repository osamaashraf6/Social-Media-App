import React from "react";
import { Link } from "react-router-dom";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
const Navbar = () => {
  return (
    <>
      <header className="border-2 border-gray-100 h-[56px] flex items-center bg-white w-full fixed z-40">
        <div className="container_wrapper">
          <div className="parnav flex items-center">
            <div className="brand grow">
              <Link to="/" className="font-bold text-lg text-indigo-600">
                Social App
              </Link>
              <div className="hanburger_control hidden">
                <button className="bars">
                  <HorizontalSplitIcon className="" fontSize="small" />
                </button>
                <button className="close">
                  <CloseIcon className="" fontSize="small" />
                </button>
              </div>
            </div>
            <nav className="navigation flex justify-between grow-[30] items-center">
              <ul className="flex gap-5 items-center">
                <li>
                  <Link to="/">
                    <HomeOutlinedIcon className="" fontSize="small" />
                  </Link>
                </li>
                <li>
                  <button className="">
                    <DarkModeOutlinedIcon className="" fontSize="small" />
                  </button>
                </li>
                <li>
                  <Link to="">
                    <DashboardOutlinedIcon className="" fontSize="small" />
                  </Link>
                </li>
                <li>
                  <div className="from_control flex relative">
                    <input
                      type="text"
                      className="border px-1 placeholder:text-xs w-[350px] pl-8 outline-none"
                      placeholder="Search..."
                    />
                    <span className="absolute top-0 left-1 text-gray-500 ">
                      <SearchIcon className="" fontSize="small" />
                    </span>
                  </div>
                </li>
              </ul>
              {/*  */}
              <ul className="w-full flex justify-end gap-5 items-center">
                <li>
                  <Link to="">
                    <PersonOutlineOutlinedIcon className="" fontSize="small" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <MailOutlineIcon className="" fontSize="small" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <NotificationsActiveOutlinedIcon
                      className=""
                      fontSize="small"
                    />
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link to="/profile/1">
                    <div className="user_profile_responsive w-[28px] h-[28px] ">
                      <img
                        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                        alt="user-profile"
                        className="responsive-img rounded-full"
                      />
                    </div>
                  </Link>
                  <span className="font-medium text-sm text-indigo-400">
                    John Doe
                  </span>
                </li>
              </ul>
              <div className="user_control"></div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
