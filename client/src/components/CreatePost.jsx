import React from "react";

const CreatePost = () => {
  return (
    <>
      <div className="px-6 py-6 rounded-xl bg-white shadow-lg mb-5">
        <div className="flex gap-3 pb-3 border-b">
          <div className=" w-[28px] h-[28px] ">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt="user-profile"
              className="responsive-img rounded-full"
            />
          </div>
          <div className="formcontrol w-full">
            <textarea
              className="outline-none text-sm placeholder:text-xs placeholder:font-medium w-full resize-none pt-2"
              cols=""
              rows="2"
              placeholder="What is in your mind john ?"
            ></textarea>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-between pt-5">
          <div className="flex gap-3">
            <button className="flex gap-2 items-center">
              <div className=" w-[21px] h-[21px] ">
                <img
                  src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="text-xs text-gray-400 ">Add image</span>
            </button>
            <button className="flex gap-2 items-center">
              <div className=" w-[21px] h-[21px] ">
                <img
                  src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="text-xs text-gray-400 ">Add place</span>
            </button>
            <button className="flex gap-2 items-center">
              <div className=" w-[21px] h-[21px] ">
                <img
                  src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                  alt="user-profile"
                  className="responsive-img rounded-full"
                />
              </div>
              <span className="text-xs text-gray-400 ">Tag friends</span>
            </button>
          </div>
          <button className="py-1 px-2 bg-indigo-500 text-white font-medium text-xs">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
