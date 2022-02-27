import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date1.toLocaleString("en-US", { day: "numeric" });
  const month = props.date1.toLocaleString("en-US", { month: "long" });
  const year = props.date1.toLocaleString("en-US", { year: "numeric" });

  //console.log(props.date1)
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

//splitting components into multiple components
