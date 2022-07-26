import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
const App = () => {
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting1={'Compra tus productos!'}/>
        </>
    )
    
}

export default App;