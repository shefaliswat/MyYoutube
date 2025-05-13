import React from "react";
import { BUTTONS } from "../utils/constants";

export const ButtonList = () => {
  return (
    <div>
      {BUTTONS.map((name, id) => {
        return <button className="bg-gray-100 mr-4 px-2 py-1 cursor-pointer rounded-lg hover:bg-gray-300" key={id}>{name}</button>;
      })}
    </div>
  );
};
