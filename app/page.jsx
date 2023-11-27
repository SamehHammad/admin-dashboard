"use client";
import { useMode } from "./ModeContext/ModeContext";
import "@/app/ui/globals.css";
const Homepage = () => {
  const { mode, toggleMode } = useMode();

  return (
    <div className="">
      <h1
        onClick={() => toggleMode()}
        className={`text-3xl font-bold underline text-center ${
          mode === "dark" ? "dark" : "light"
        }`}
      >
        Hello world!
      </h1>
    </div>
  );
};

export default Homepage;
