import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<ItemListContainer greeting1={'Compra tus productos!'}/>}/>
            <Route path='/categoria/:id' element = {<ItemListContainer/>} />
            <Route path='/detail/:id' element = {<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
    
}

export default App;