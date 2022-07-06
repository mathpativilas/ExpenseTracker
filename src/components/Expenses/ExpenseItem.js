import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [Title, setchngTitle] = React.useState(props.title);

  const chanFun = () => {
    setchngTitle("newupdated");
    console.log("updated");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>

      <button className="btn" onClick={chanFun}>
        change title
      </button>
    </div>
  );
}

export default ExpenseItem;
