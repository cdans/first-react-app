import React from "react";
import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";

function createALert(){
    alert("clicked")
}

function App() {
    return (
        <div className="App">
            <Header
                info="This is my message"
                myNumber="6"
            ></Header>
            <p>main content</p>
            <Footer
                trademark="page by Christoph"
                myAlert={createALert()}
            ></Footer>
        </div>
    );
}

export default App;
