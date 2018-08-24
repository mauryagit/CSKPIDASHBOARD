import * as React from "react";
import { render } from "react-dom";
import { Hello } from "./Hello";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Header />
        <Hello name="Khargosh" age="10" />
        <Footer />
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
