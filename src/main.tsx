import React from "react";
import ReactDOM from "react-dom/client";
import { clarity } from "react-microsoft-clarity";
import { Wrapper } from "./Wrapper";

clarity.init("kzhxxy2ip7");
clarity.consent();
clarity.setTag("miniapp", "new");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
);
