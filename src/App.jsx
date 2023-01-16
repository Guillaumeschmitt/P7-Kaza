import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Error from "./pages/Error/Error.jsx";
import About from "./pages/About/About.jsx";
import Product from './pages/product/product.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/Apropos" element={<About />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/*" element={<Error />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;