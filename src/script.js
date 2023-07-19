import React from "react";
import ReactDOM from "react-dom/client";
import './style/style.scss'
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Container from "./component/Container";

const App = () => {
    return (
        <main>
            <Header/>
            <div className="content">
                <Sidebar/>
                <Container/>
            </div>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(App());