import NavBar from "./NavBar/NavBar"
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting1={'Compra tus productos!'}/>
        </>
    )
    
}

export default App;