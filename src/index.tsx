import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { RecoilRoot } from "recoil";

const main = (
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(main);
