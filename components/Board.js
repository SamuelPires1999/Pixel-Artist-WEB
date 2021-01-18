import { useState } from "react";
import { FaEraser, FaUndo } from "react-icons/fa";

const blankCell = {
  on: false,
  bgColor: "white",
};

export default function Board({ currentColor, cells, setCells }) {
  const [cellBorder, setCellBorder] = useState(true);
  const [oldBoard, setOldBoard] = useState(cells);

  const updateCell = (i) => (e) => {
    e.preventDefault();

    if (e.buttons === 1 || e.buttons === 2) {
      setCells(
        cells.map((cell, cellIndex) => {
          if (cellIndex === i) {
            if (e.buttons === 1) {
              return {
                on: true,
                bgColor: currentColor,
              };
            }
            return blankCell;
          }
          return cell;
        })
      );
    }
  };

  const undoClear = () => {
    setCells(oldBoard);
  };

  const toogleBorders = () => {
    setCellBorder(!cellBorder);
  };

  const clearBoard = () => {
    setOldBoard(cells);

    setCells(
      cells.map(() => {
        return blankCell;
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
      <div className="flex items-center justify-center">
        <button
          className="flex items-center justify-center py-2 px-7 rounded-md mt-3 bg-blue-400 font-bold text-white transition duration-100 hover:bg-blue-500"
          onClick={() => clearBoard()}
        >
          Clear board
          <FaEraser size={15} className="ml-3" />
        </button>
        <button
          className="ml-7 flex items-center justify-center py-2 px-7 rounded-md mt-3 bg-red-400 font-bold text-white transition duration-100 hover:bg-red-500"
          onClick={() => undoClear()}
        >
          Undo
          <FaUndo size={15} className="ml-3" />
        </button>
        <button
          className="ml-7 flex items-center justify-center py-2 px-7 rounded-md mt-3 bg-gray-500 font-bold text-white transition duration-100 hover:bg-grey-500"
          onClick={() => toogleBorders()}
        >
          Toogle cell border
        </button>
      </div>
      <div className="flex justify-center items-center flex-wrap mt-4 border-2 border-black ">
        {cells.map((cell, index) => (
          <div
            key={index}
            className={` ${
              cellBorder ? "border-black" : "border-none"
            } border-2 border-opacity-60  w-10 h-10 ${
              cell.on ? cell.bgColor : "bg-white"
            } hover:${currentColor}
        transition duration-100 ease-linear
      `}
            onMouseOver={updateCell(index)}
            onMouseDown={updateCell(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
