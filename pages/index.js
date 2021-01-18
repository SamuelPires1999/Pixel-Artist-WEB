import { useState } from "react";
import Board from "../components/Board";
import ColorCell from "../components/ColorCell";
import Wrapper from "../components/Wrapper";
//import colorList from "../utils/colorList";

const colorList = [
  //grey
  { name: "light-gray", code: "bg-gray-500" },
  { name: "medium-gray", code: "bg-gray-700" },
  { name: "dark-gray", code: "bg-gray-900" },
  //blue
  { name: "light-blue", code: "bg-blue-500" },
  { name: "medium-blue", code: "bg-blue-700" },
  { name: "dark-blue", code: "bg-blue-900" },
  //red
  { name: "light-red", code: "bg-red-500" },
  { name: "medium-red", code: "bg-red-700" },
  { name: "dark-red", code: "bg-red-900" },
  //green
  { name: "light-green", code: "bg-green-500" },
  { name: "medium-green", code: "bg-green-700" },
  { name: "dark-green", code: "bg-green-900" },
  //yellow
  { name: "light-yellow", code: "bg-yellow-400" },
  { name: "medium-yellow", code: "bg-yellow-500" },
  { name: "dark-yellow", code: "bg-yellow-700" },
  { name: "brown", code: "bg-yellow-900" },

  //pink

  { name: "light-pink", code: "bg-pink-500" },
  { name: "medium-pink", code: "bg-pink-700" },
  { name: "dark-pink", code: "bg-pink-900" },

  //purple

  { name: "light-purple", code: "bg-purple-500" },
  { name: "medium-purple", code: "bg-purple-700" },
  { name: "dark-purple", code: "bg-purple-900" },

  { name: "white", code: "bg-white" },
  { name: "black", code: "bg-black" },
];

const blankCell = {
  on: false,
  bgColor: "white",
};

const initialCells = Array.from({ length: 560 }, () => blankCell);

export default function IndexPage() {
  const [currentColor, setCurrentColor] = useState();
  const [cells, setCells] = useState(initialCells);

  return (
    <Wrapper>
      <div className="flex justify-center items-center max-w-xl flex-wrap">
        {colorList.map((color) => (
          <div onClick={() => setCurrentColor(color.code)}>
            <ColorCell bgColor={color.code} />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center space-x-4">
        <div className="font-bold capitalize">Current color:</div>
        <div
          className={`border-2 border-gray-500  h-5 w-5 rounded-full ${currentColor}`}
        ></div>
      </div>

      <div className="flex justify-center items-center max-w-6xl flex-wrap ">
        <Board cells={cells} setCells={setCells} currentColor={currentColor} />
      </div>
    </Wrapper>
  );
}
