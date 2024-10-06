import React from "react";

const AsideRight = () => {
  return (
    <>
      <div className="bg-white p-4 mb-3">
        <h3 className="font-medium text-xs pb-4 text-gray-400">Suggested For You</h3>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className=" w-[28px] h-[28px] ">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="font-bold text-xs">Emery Farley</span>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 text-white bg-indigo-500 text-xs">
                follow
              </button>
              <button className="px-2 py-1 text-white bg-red-500 text-xs">
                stories
              </button>
            </div>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className=" w-[28px] h-[28px] ">
                <img
                   src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="font-bold text-xs">Alice Wells</span>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 text-white bg-indigo-500 text-xs">
                follow
              </button>
              <button className="px-2 py-1 text-white bg-red-500 text-xs">
                stories
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="bg-white p-4 mb-3">
        <h3 className="font-medium text-xs pb-4 text-gray-400">Latest Activities</h3>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className=" w-[28px] h-[28px] ">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="font-medium text-xs">Andrea</span>
              <span className="font-medium text-xs">
                : Changes their cover picture.
              </span>
            </div>
            <span className="text-xs font-medium text-gray-500">1 min ago</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className=" w-[28px] h-[28px] ">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="font-medium text-xs">Andrea</span>
              <span className="font-medium text-xs">: Liked a post.</span>
            </div>
            <span className="text-xs font-medium text-gray-500">1 min ago</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className=" w-[28px] h-[28px] ">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="font-medium text-xs">Drew Williamson</span>
              <span className="font-medium text-xs">: Liked a comment.</span>
            </div>
            <span className="text-xs font-medium text-gray-500">1 min ago</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className=" w-[28px] h-[28px] ">
                <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="font-medium text-xs">Andrea</span>
              <span className="font-medium text-xs">: Posted a new photo.</span>
            </div>
            <span className="text-xs font-medium text-gray-500">1 min ago</span>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="bg-white p-4 mb-3 h-full">
        <h3 className="font-medium text-xs pb-4 text-gray-400">Online Friends</h3>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-3">
            <div className=" w-[28px] h-[28px] relative">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
              <span className="flex w-[7px] h-[7px] bg-green-400 rounded-full absolute top-[1px] left-[23px]"></span>
            </div>
            <span className="font-medium text-xs">Events</span>
          </li>
          <li className="flex items-center gap-3">
            <div className=" w-[28px] h-[28px] relative">
              <img
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
              <span className="flex w-[7px] h-[7px] bg-green-400 rounded-full absolute top-[1px] left-[23px]"></span>
            </div>
            <span className="font-medium text-xs">Events</span>
          </li>
          <li className="flex items-center gap-3">
            <div className=" w-[28px] h-[28px] relative">
              <img
                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
              <span className="flex w-[7px] h-[7px] bg-green-400 rounded-full absolute top-[1px] left-[23px]"></span>
            </div>
            <span className="font-medium text-xs">Events</span>
          </li>
          <li className="flex items-center gap-3">
            <div className=" w-[28px] h-[28px] relative">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
              <span className="flex w-[7px] h-[7px] bg-green-400 rounded-full absolute top-[1px] left-[23px]"></span>
            </div>
            <span className="font-medium text-xs">Events</span>
          </li>
          <li className="flex items-center gap-3">
            <div className=" w-[28px] h-[28px] relative">
              <img
                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user-profile"
                className="responsive-img rounded-full"
              />
              <span className="flex w-[7px] h-[7px] bg-green-400 rounded-full absolute top-[1px] left-[23px]"></span>
            </div>
            <span className="font-medium text-xs">Events</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AsideRight;
