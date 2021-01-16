export default function ColorCell({ bgColor }) {
  return (
    <div
      className={`mt-2 ml-2 border-black border-2 rounded-md w-14 h-14 ${bgColor} `}
    ></div>
  );
}
