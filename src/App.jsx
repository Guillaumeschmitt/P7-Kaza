import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home />}></Route>
        <Route path="/footer" element={<Footer />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
