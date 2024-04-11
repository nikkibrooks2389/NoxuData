import React from "react";
import userImage from "../../../../public/assets/user-profile-picture.png";

const UserInfo: React.FC = () => {
  return (
    <div
      className="flex justify-center bg-white w-full py-7"
      style={{ height: "15vh" }}
    >
      <div className="flex items-center custom-min-width">
        <img src={userImage.src} alt="User Profile" className="w-10 h-10 " />
        <div className="ml-2">
          <ul className="mt-1">List my top 10 accounts</ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
