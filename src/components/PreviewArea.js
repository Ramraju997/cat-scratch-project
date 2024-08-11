import React, { useEffect } from "react";
import CatSprite from "./CatSprite";
import { useContext } from "react";
import { dataContext } from "../App";


export default function PreviewArea() {
  const { translate, rotate } = useContext(dataContext);

  return (
    <div className="flex-none h-full p-2" 
    style={{
      transform: `translate(${translate.x}px, ${translate.y}px)`,
    }}
    >
      <CatSprite />
    </div>
  );
}
