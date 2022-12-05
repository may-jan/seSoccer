// Sidebar menu
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <FaIcons.FaHome />,
  },

  {
    title: "Vote",
    path: "/vote",
    icon: <FaIcons.FaVoteYea />,
  },

  {
    title: "MyPage",
    path: "/mypage",
    icon: <MdIcons.MdAccountCircle />,
  },
];

export default SidebarData;
