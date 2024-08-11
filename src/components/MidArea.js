import React from "react";
import  { useContext } from "react";
import { dataContext } from "../App";

export default function MidArea() {
  const { moveOnClick , eventClick, rotateInverse} = useContext(dataContext);
  return (
  <div className="flex-1 h-full overflow-auto">
   {moveOnClick ? (
      <div>Click on the sprite to move</div>
    ) : eventClick ? (
      <div>
        <button onClick={()=>{rotateInverse()}}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Rotate sprite
      </button>
      </div>
    ) : (
      <div></div>
    )}
  </div>
);
}
