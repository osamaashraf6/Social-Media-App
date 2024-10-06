import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const UserStory = () => {
  return (
    <>
      <div className="item relative w-[150px] h-full flex-shrink-0">
        <div className="h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
            alt=""
            className="responsive-img rounded-lg hover:scale-110 transition delay-50 ease-in-out"
          />
        </div>
        <div className="absolute bottom-2 left-2 flex flex-col items-center gap-2">
          <button className=" bg-blue-500 w-[25px] h-[25px] rounded-full text-white font-medium">
            <label className="cursor-pointer" htmlFor="userstory">
              <AddOutlinedIcon />
            </label>
            <input type="file" id="userstory" className="hidden" />
          </button>
          <span className="text-white text-xs font-medium">John Doe</span>
        </div>
      </div>
    </>
  );
};

export default UserStory;
