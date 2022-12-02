import React from "react";

function Transaction({transaction}) {
    const {text, amount} = transaction
  return (
    <div>
      <li className="minus">
        {text} <span>{amount}</span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
}

export default Transaction;
