import * as React from "react";
import * as ReactDOM from "react-dom";

import { Main } from "./components/main";
import { createDataFactory } from "./dataFactory";

const dataFactory = createDataFactory();

ReactDOM.render(
  <Main dataFactory={dataFactory} />,
  document.getElementById("root")
);
