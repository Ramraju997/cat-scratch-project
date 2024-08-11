import React, { useEffect } from "react";
import CatSprite from "./CatSprite";
import { useContext } from "react";
import { dataContext } from "../App";


export default function PreviewArea() {
  const { translate, rotate, containerRef } = useContext(dataContext);
  return (
    <div ref={containerRef} className="flex-none h-full p-2 w-full" >
      <CatSprite />
    </div>
  );
}
