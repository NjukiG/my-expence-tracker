import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpence() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((amount, index) => (amount += index), 0)
    .toFixed(2);

  const expences = amounts
    .filter((amount) => amount < 0)
    .reduce((amount, index) => (amount += index), 0)
    .toFixed(2);

  console.log(incomes);
  console.log(expences);
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +KES: {incomes}
          </p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p id="money-minus" className="money minus">
            -KES: {expences}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpence;
