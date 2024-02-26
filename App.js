import React, { Component } from "react";

import { TarefasProvider } from "./src/context/TarefasContext";
import Principal from "./src/Index";

export default class App extends Component {
  render() {
    return (
      <TarefasProvider>
        <Principal />
      </TarefasProvider>
    )
  }
}