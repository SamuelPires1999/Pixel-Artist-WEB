import { useState } from "react";
import Board from "../components/Board";
import ColorCell from "../components/ColorCell";
import Wrapper from "../components/Wrapper";
import colorList from "../utils/colorList";

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
          className={`border-2 border-black h-5 w-5 rounded-full ${currentColor}`}
        ></div>
      </div>

      <div className="flex justify-center items-center max-w-6xl flex-wrap">
        <Board cells={cells} setCells={setCells} currentColor={currentColor} />
      </div>
    </Wrapper>
  );
}
