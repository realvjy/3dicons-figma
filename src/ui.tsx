import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
// import {HelloTest, Toface}  from "./components/hello-test";
import Home from "./views/home";

declare function require(path: string): any;


function App() {
  return (
    <main>
        <Home name="This is good" />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("react-page"));