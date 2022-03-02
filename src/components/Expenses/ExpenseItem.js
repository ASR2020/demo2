import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  //let title = props.title;
    const clickHandler = () => {
    setTitle("updated");
 
   console.log(title);
  };
  console.log(title)
  //console.log(setTitle);
  return (
    <Card className="expense-item">
      <ExpenseDate date1={props.date5} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;

//from parent component to child components (date5 from expenses i.e parent components date5= ...)
