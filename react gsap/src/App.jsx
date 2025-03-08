import { Route, Routes } from "react-router";
import About from "./page/About";
import Home from "./page/Home";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="text-center text-3xl uppercase text-green-500">
        gsap+react
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
