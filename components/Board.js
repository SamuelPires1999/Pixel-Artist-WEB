const blankCell = {
  on: false,
  bgColor: "white",
};

export default function Board({ currentColor, cells, setCells }) {
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

  const clearBoard = () => {
    setCells(
      cells.map((cell) => {
        return blankCell;
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
      <div className="flex items-center justify-center">
        <button
          className="py-3 px-7 rounded-md mt-3 bg-blue-400 font-bold text-white transition duration-100 hover:bg-blue-500"
          onClick={() => clearBoard()}
        >
          Clear board
        </button>
      </div>
      <div className="flex justify-center items-center flex-wrap mt-4">
        {cells.map((cell, index) => (
          <div
            key={index}
            className={` border-black border-2 rounded-md w-10 h-10 ${
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
