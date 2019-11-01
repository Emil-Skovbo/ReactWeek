import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import ListDemoApp from "./ListDemoApp"
import State from "./State"
import ListDemoApp2 from "./ListDemoApp2"
import FormDemo from "./FormDemo"
import LiftState from "./LiftingState"

let app = <app4 />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        ex1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        ex2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        ex3
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app4">
        State and Event
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app5">
        ListDemo
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app6">
        ListDemo2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app7">
        FormDemo
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app8">
        LiftState
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <App />;
      break;
    case "app2":
      app = <App2 />;
      break;
    case "app3":
      app = <App3 />;
      break;
    case "app4":
      app = <State />;
      break;
    case "app5":
      app = <ListDemoApp />;
      break;
    case "app6":
      app = <ListDemoApp2 />;
      break;
    case "app7":
      app = <FormDemo />;
      break;
    case "app8":
      app = <LiftState />;
      break;

  }

  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
