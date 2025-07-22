// ✅ Remove Router here
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import "./scss/style.scss";
import Thankyou from "./pages/Thankyou";
import CartPage from "./pages/CartPage";
import Contact from "./pages/Contact";

function App() {
  return (
   <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Collection />} />
          <Route path="/product/:slug" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </MainLayout>
  );
}

export default App;
