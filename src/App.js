import React from "react";
import { Header } from "./components/header/header.component";
import { Body } from "./components/body/body.component";
import { Footer } from "./components/footer/footer.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = "";
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
