import React from "react";
import "./App.less";
import { Counter } from "./Counter";

const App = () => {
  return (
    <div className="app">
      Welcome to Webpack5 React Recoil Boilerplate!
      <p />
      <img src="assets/recoil.png" height={200} />
      <p />
      <Counter />
    </div>
  );
};

export default App;
