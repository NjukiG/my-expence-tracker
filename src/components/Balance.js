import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)

  const totalBalance = amounts.reduce((amount, index) => (amount += index), 0).toFixed(2)
  console.log(totalBalance)
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${totalBalance}</h1>
    </div>
  );
}

export default Balance;
