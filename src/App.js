import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import  {createContext, useContext, useState} from "react";
export const dataContext = createContext(null);

export const DataProvider = ({children}) => {
const [translate, setTranslate] = useState({ x: 0, y: 0 });
const [rotate, setRotate] = useState(0);
const increment = ()=>{
  debugger;
  const angleInRadians = (rotate * Math.PI) / 180;
  const newX = translate.x + 10 * Math.cos(angleInRadians);
  const newY = translate.y + 10 * Math.sin(angleInRadians);
  setTranslate({ x: newX, y: newY });
}

const rotateIncrement = () => {
  setRotate(rotate + 15);
}

const rotateDecrement = () => {
  setRotate(rotate - 15);
}

return (
  <dataContext.Provider value={{ translate, increment, rotate, rotateIncrement, rotateDecrement }}>
      {children}
    </dataContext.Provider>
)
}
export default function App() {
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar /> <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
