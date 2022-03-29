import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <div className="main-content">
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
