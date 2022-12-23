import React from "react";
import "./App.css";
import PaymentSummary from "./components/PaymentSummary";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PaymentSummary />
    </div>
  );
}

export default App;
