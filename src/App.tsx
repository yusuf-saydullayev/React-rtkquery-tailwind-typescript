import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainL";
import Home from "./Pages/Home";
import About from "./Pages/About";
function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainLayout>
  )
}

export default App
