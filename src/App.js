import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Routes, Route} from "react-router-dom";
import SuperNavbarContainer from "./components/Navbar/NavbarContainer";
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SuperNavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile"
                           element={<Profile />}/>
                    <Route path="/dialogs/*" element={<SuperDialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;