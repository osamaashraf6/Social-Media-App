import React from "react";

const AsideLeft = () => {
  return (
    <>
      <div className="altop bg-white mb-[5px] py-4 px-4">
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">John Doe</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/1.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Friends</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/2.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Groups</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/3.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">MarketPlace</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/4.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Watch</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/5.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Memories</span>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="alcenter bg-white py-4 px-4 mb-[3px]">
        <h3 className="font-medium text-xs pb-4">Your Stories</h3>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/6.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Events</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/7.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Gaming</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/8.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Gallery</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/9.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Videos</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/10.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Messages</span>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="albottom bg-white py-4 px-4 h-full">
        <h3 className="font-medium text-xs pb-4">Others</h3>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/13.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Fundraiser</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/6.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Tutorials</span>
          </li>
          <li className="flex items-center gap-2">
            <div className=" w-[28px] h-[28px] ">
              <img
                src="/12.png"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
            </div>
            <span className="font-medium text-xs">Courses</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AsideLeft;
