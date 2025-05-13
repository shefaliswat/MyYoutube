import React from "react";
import { SIDE_LINKS } from "../utils/constants";
import { useSelector } from "react-redux";

export const SideMenu = () => {
  const appState = useSelector((store)=> store.app)

  return (
    <div className="flex flex-col p-2 whitespace-nowrap">
      {SIDE_LINKS.map((link) => {
        return (
          <div
            key={link.id}
            className="focus:bg-gray-100 mr-4 py-2 px-3 my-1 cursor-pointer rounded-xl hover:bg-gray-100"
          >
            <img
              className="inline h-5 w-5 mr-2"
              alt="icon"
              src={link.icon}
            />
            {appState.displaySideMenu && link.label}
          </div>
        );
      })}
    </div>
  );
};
