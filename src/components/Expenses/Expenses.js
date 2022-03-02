import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";

function Expenses(props) {
  
  return (
      
    <Card className='expenses'>
      <ExpenseItem
        title={props.items[0].title}
        amount="94.12"
        date5={props.items[0].date4}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date5={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date5={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date5={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
