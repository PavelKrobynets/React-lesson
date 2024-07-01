// import logo from "./logo.svg";
import "./App.css";
import React from "react";

const Header = () => {
  return <h2>Hello world!</h2>;
};


class Field extends React.Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: "200px",
      height: "40px",
    };
		return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Btn() {
  // const text = "Log in";
  // const p = <p>Log in</p>
  const res = () => {
    return "Log in";
  };
  const logged = true;
  return <button>{logged ? "Enter" : res()}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}
export { Header };
export default App;
