import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
              <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="/*" element={<h1>Page not found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
