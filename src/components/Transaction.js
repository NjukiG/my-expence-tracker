import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({transaction}) {
    const {text, amount, id} = transaction
    const sign = amount < 0 ? "-" : "+"

    const {deleteTransaction} = useContext(GlobalContext) 
  return (
    <div>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text} <span>{sign} KES.{Math.abs(amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
      </li>
    </div>
  );
}

export default Transaction;
