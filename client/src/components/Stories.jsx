import React from "react";
import UserStory from "./UserStory";
import FriendsStories from "./FriendsStories";

const Stories = () => {
  return (
    <>
      <div className="items flex gap-2 h-[30vh] mb-5">
        <UserStory />
        <FriendsStories />
      </div>
    </>
  );
};

export default Stories;
