import React from "react";
import ReactDOM from "react-dom";
//import value, { Doubleval, Trippleval } from "./App";
import * as val from "./App";
/*
ReactDOM.render(
  <div>
    <ul>
      <li>{value}</li>
      <li>{Doubleval()}</li>
      <li>{Trippleval()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
*/
ReactDOM.render(
  <div>
    <ul>
      <li>{val.default}</li>
      <li>{val.Doubleval()}</li>
      <li>{val.Trippleval()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
