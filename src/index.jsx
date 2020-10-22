import React from "react";
import ReactDOM from "react-dom";
import './scss/styles.scss';
import house from "../public/images/house.jpeg";
import huge from "../public/images/huge.svg";
import truck from "../public/images/truck.svg";

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
        console.log("Small file so base 64:", truck);
        console.log("Big file so path:", huge);

        return(
            <div className="title" style={{ display: "flex" }}>
                <strong>Hello React</strong>
                 <img src={house} style={{ width: "200px", height: "200px", padding: "20px"}}></img>
                 <img src={huge} style={{ width: "200px", height: "200px", padding: "20px" }}></img>
                 <img src={truck} style={{ width: "200px", height: "200px", padding: "20px" }}></img>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
