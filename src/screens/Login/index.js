import React from "react";

import Auth from "../Auth";
import profile from "../MyPage/image/profile.png";
import MenuItem from "../../common/UIElements/MenuItem";
import { MyProfileContainer } from "./style";

export const Login = () => {
  return <Auth state="LogIn" />;
};

export const SignUp = () => {
  return <Auth state="SignUp" />;
};

export const MyProfile = () => {
  return (
    <MenuItem>
      <MyProfileContainer>
        <img src={profile} alt="" width="50px" />
      </MyProfileContainer>
    </MenuItem>
  );
};
