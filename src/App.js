import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
const App = () => {
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting1={'Compra tus productos!'}/>
            <ItemDetailContainer/>
        </>
    )
    
}

export default App;