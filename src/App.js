import React from "react";
import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";

function createALert() {
    alert("clicked")
}

function ShowMessage(props) {
    if (props.toShow) {
        return <h2>My Message</h2>
    } else {
        return <h2>Forbidden</h2>
    }
}

function App() {
    const userlogin = true
    if (userlogin) {
        return (
            <div className="App">
                <Header
                    info="This is my message"
                    myNumber="6"
                ></Header>
                <p>main content</p>
                <Footer
                    trademark="page by Christoph"
                    myAlert={createALert}
                ></Footer>
                <ShowMessage toShow={false}/>
            </div>
        );
    } else {
        return <h2>Forbidden</h2>
    }

}

export default App;
