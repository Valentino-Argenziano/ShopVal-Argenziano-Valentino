import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<ItemListContainer greeting1={'Compra tus productos!'}/>}/>
            <Route path='/categoria/:id' element = {<ItemListContainer/>} />
            <Route path='/detail/:id' element = {<ItemDetailContainer/>} />
            <Route path='/cart' element = {<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}

export default App;