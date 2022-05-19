import React from "react";
import InsuranceList from "./components/organisms/InsuranceList";
import "./css/App.scss";

const App = () => (
  <main className="container py-5">
    <h1 className="pb-3">PROTECTION</h1>
    <InsuranceList />
  </main>
);

export default App;
