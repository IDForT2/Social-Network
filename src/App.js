import './App.css';
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";
import SuperNavbarContainer from "./components/Navbar/NavbarContainer";
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SuperNavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile/:userId"
                           element={<ProfileContainer />}/>
                    <Route path="/profile/"
                           element={<ProfileContainer />}/>
                    <Route path="/dialogs/*" element={<SuperDialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;