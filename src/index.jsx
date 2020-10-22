import React from "react";
import ReactDOM from "react-dom";
import './scss/styles.scss';
import house from "../public/images/house.jpeg";

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
                 <img src={house} style={{ width: "200px", height: "200px" , padding: "20px"}}></img>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
