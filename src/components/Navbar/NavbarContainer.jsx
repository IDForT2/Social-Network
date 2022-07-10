import StoreContext from "../../storeContext";
import Navbar from "./Navbar";

const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return <Navbar
                    friens={state.sidebar.friends}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer