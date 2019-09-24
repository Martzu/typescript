import React from 'react';
import './App.css';
import Login from './login/Login';
import CssBaseline from "@material-ui/core/CssBaseline";
import {AppState} from "./login/store";
import {UserState} from "./login/types/User";

interface AppProps {
    user: UserState
}

const mapStateToProps = (state: AppState) => ({
    user: state.currentUser
});

const App: React.FC = (AppProps) => {
  return (
    <>
        <CssBaseline />
        <Login/>
    </>
  );
}

export default App;
