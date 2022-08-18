import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./components/CartContext/CartContext";

const App = () => {
    return (
        <BrowserRouter>
            <CartContext>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting1={'Compra tus productos!'} />} />
                    <Route path='/categoria/:id' element={<ItemListContainer />} />
                    <Route path='/detail/:id' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </CartContext>
        </BrowserRouter>
    )

}

export default App;