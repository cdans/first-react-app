import React from "react";
import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import styled from 'styled-components'

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

const pStyle = {
    fontSize: '2em',
    color: 'red',
}

const Paragraph = styled.p`
    font-size: 3em;
    color: blue;
`;

function App() {
    const userlogin = true
    if (userlogin) {
        return (
            <div className="App">
                <Header
                    info="This is my message"
                    myNumber="6"
                ></Header>
                <p style={pStyle}>main content</p>
                <Paragraph>New Styled</Paragraph>
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
