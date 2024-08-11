import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import  {createContext, useContext, useState,useRef} from "react";
export const dataContext = createContext(null);

export const DataProvider = ({children}) => {
const [translate, setTranslate] = useState({ x: 0, y: 0 });
const [rotate, setRotate] = useState(0);
const containerRef = useRef(null);
const [moveOnClick, setMoveOnClick] = useState(false);
const [eventClick, setEventClick] = useState(false);

const enableMoveOnClick = () => {
  setMoveOnClick(true);
};

const disableMoveOnClick = () => {
  setMoveOnClick(false);
};

const enableEventClick = () => {
  setEventClick(true);
};

const disableEventClick = () => {
  setEventClick(false);
};

const increment = ()=>{
  if (!containerRef.current) return;
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const angleInRadians = (rotate * Math.PI) / 180;
    const deltaX = 10 * Math.cos(angleInRadians);
    const deltaY = 10 * Math.sin(angleInRadians);
    const newX = translate.x + deltaX;
    const newY = translate.y + deltaY;
    const boundedX = Math.max(0, Math.min(newX, containerWidth - 95)); 
    const boundedY = Math.max(0, Math.min(newY, containerHeight - 100));
    setTranslate({ x: boundedX, y: boundedY });
}

const rotateIncrement = () => {
  setRotate(rotate + 15);
}

const rotateDecrement = () => {
  setRotate(rotate - 15);
}

const rotateInverse = () => {
  setRotate(rotate + 180);
}

return (
  <dataContext.Provider value={{ translate, increment, rotate, rotateIncrement, rotateDecrement,
   containerRef, enableMoveOnClick, disableMoveOnClick, moveOnClick, eventClick, enableEventClick, disableEventClick, rotateInverse}}>
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
