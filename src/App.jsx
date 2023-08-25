import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { ShopContextProvider } from "./context/context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="*" element={<h1>page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
