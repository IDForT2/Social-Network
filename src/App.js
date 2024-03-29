import React from "react";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route, BrowserRouter,Navigate} from "react-router-dom";
import SuperNavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {compose} from "redux";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const SuperDialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionError) => {
        alert("Some error occured");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <SuperNavbarContainer/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route exact path="/" element={<Navigate to={'/profile'} /> } />
                            <Route path="/profile/:userId"
                                   element={<ProfileContainer/>}/>
                            <Route path="/profile/"
                                   element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={<SuperDialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="*" element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp;