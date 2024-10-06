import React from "react";

const FriendsStories = () => {
  return (
    <>
      <div className="substories overflow-auto flex gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="relative w-[150px] h-full flex-shrink-0">
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                alt=""
                className="responsive-img rounded-lg hover:scale-110 transition delay-50 ease-in-out"
              />
            </div>
            <div className="absolute bottom-2 left-2">
              <span className="text-white text-xs font-medium">
                John Doe {index + 1}
              </span>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </>
  );
};

export default FriendsStories;
