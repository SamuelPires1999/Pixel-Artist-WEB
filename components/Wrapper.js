export default function Wrapper({ children }) {
  return (
    <div className="flex flex-col w-screen  justify-center items-center space-y-2">
      {children}
    </div>
  );
}
