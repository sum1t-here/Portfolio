import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Template from "./components/Template";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
