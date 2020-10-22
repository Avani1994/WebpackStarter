import React from "react";
import ReactDOM from "react-dom";
import './scss/styles.scss';

// Testing code for JS
function component() {
    const element = document.createElement("div");
    element.innerHTML = "Hello world";
    return element;
}

document.body.appendChild(component());

// Testing for React
class App extends React.Component{
    render() {
        return(
            <div className="title" style={{ display: "flex" }}>
                <strong>Hello React</strong>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
