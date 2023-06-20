import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpence from "./components/IncomeExpence";
import TranscationList from "./components/TranscationList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContext, GlobalProvider } from "./context/GlobalState";
import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <IncomeExpence />

        <Balance />
        <TranscationList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
