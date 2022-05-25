import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
// import {HelloTest, Toface}  from "./components/hello-test";
import { useWindowResize } from "./utils/use-window-resize";
import Home from "./views/home";

declare function require(path: string): any;


const App = () => {
  const [currentPage] = React.useState("home");

  function onWindowResize(windowSize: { width: number; height: number }) {
    parent.postMessage(
      {
        pluginMessage: {
          type: "window-resize",
          data: { width: windowSize.width, height: windowSize.height },
        },
      },
      "*"
    );
  }
  useWindowResize(onWindowResize, {
    minWidth: 120,
    minHeight: 120,
    maxWidth: 1024,
    maxHeight: 1024,
  });

  const renderPage = () => {
    switch (currentPage) {
      default:
      case "home":
        return <Home />;
    }
  };

  return renderPage();
};

ReactDOM.render(<App />, document.getElementById("react-page"));