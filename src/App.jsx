import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from "./pages/Library";
import Favourite from "./pages/Favourite";
import Trending from "./pages/Trending";
import SideBar from "./components/SideBar";

function App() {
    
    return (
      <Router>
        <div className="flex h-screen w-screen bg-gray-950 rounded-1xl">
          <SideBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;


// because side bar remains constant it doesn't need to be included in routes that is why it is above it