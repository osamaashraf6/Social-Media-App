import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
const Posts = () => {
  const [openDelete, setOPenDelete] = useState(false);
  const [openComment, setOPenComment] = useState(false);
  return (
    <>
      <div className="px-6 py-4 rounded-xl bg-white shadow-lg flex flex-col gap-3 mb-5">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="capitalize text-xs font-bold ">collin fscher</h2>
              <span className="text-xs">16 hours ago</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <button
              className=""
              onClick={() => {
                setOPenDelete(!openDelete);
              }}
            >
              <MoreHorizOutlinedIcon />
            </button>
            {openDelete && (
              <button className="py-1 px-2 text-xs text-white bg-red-500">
                delete
              </button>
            )}
          </div>
        </div>
        <p className="text-xs font-medium text-gray-500 pb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="flex gap-4 mb-3">
          <button className="text-xs font-bold flex items-center gap-1">
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <span> 0</span> Likes
          </button>
          <button
            onClick={() => {
              setOPenComment(!openComment);
            }}
            className="text-xs font-bold flex items-center gap-1"
          >
            <TextsmsOutlinedIcon fontSize="small" />
            <span> 0</span> Comments
          </button>
          <button className="text-xs font-bold flex items-center gap-1">
            <ShareOutlinedIcon fontSize="small" />
            <span> 0</span> Share
          </button>
        </div>
        {/* comment */}
        <div className={`${openComment ? "flex flex-col" : "hidden"}`}>
          <div className="create flex gap-3 items-center mb-6">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <div className="fromcontrol w-full">
              <input
                type="text"
                placeholder="write a comment"
                className="text-sm w-full border placeholder:text-xs outline-none px-2 py-1"
              />
            </div>
            <button className="py-1.5 px-2 text-white text-xs bg-indigo-500 rounded">
              Send
            </button>
          </div>
          <div className="comments flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="singlecomment flex justify-between items-center">
                <div className="flex gap-4">
                  <div className=" w-[28px] h-[28px] ">
                    <img
                      src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                      alt="user-profile"
                      className="responsive-img rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="capitalize font-bold text-xs">
                      collins fscher
                    </h3>
                    <span className="text-sm text-gray-500">
                      you are awesome
                    </span>
                  </div>
                </div>
                <div className="text-xs">2 days ago</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="px-6 py-4 rounded-xl bg-white shadow-lg flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="capitalize text-xs font-bold ">collin fscher</h2>
              <span className="text-xs">16 hours ago</span>
            </div>
          </div>
          <button className="">
            <MoreHorizOutlinedIcon />
          </button>
        </div>
        <p className="text-xs font-medium text-gray-500 pb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="h-[460px]">
          <img
            src="https://images.pexels.com/photos/3694871/pexels-photo-3694871.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="responsive-img"
          />
        </div>
        <div className="flex gap-4">
          <button className="text-xs font-bold flex items-center gap-1">
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <span> 0</span> Likes
          </button>
          <button className="text-xs font-bold flex items-center gap-1">
            <TextsmsOutlinedIcon fontSize="small" />
            <span> 0</span> Comments
          </button>
          <button className="text-xs font-bold flex items-center gap-1">
            <ShareOutlinedIcon fontSize="small" />
            <span> 0</span> Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
