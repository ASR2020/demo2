import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";

function ExpenseItem(props) {

  
  //console.log(props)
  return (
    <Card className="expense-item">
      <ExpenseDate date1={props.date5} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

//from parent component to child components (date5 from expenses i.e parent components date5= ...)
