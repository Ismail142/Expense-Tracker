import "./ExpenseDate.css";

function ExpenseDate(props) {
   const day = props.date.toLocaleString("us-EN", { day: "numeric" });
   const month = props.date.toLocaleString("us-EN", { month: "long" });
   const year = props.date.getFullYear();

   return (
      <div className="expense-date">
         <div className="expense-date__month">{month}</div>
         <div className="expense-date__year">{year}</div>
         <div className="expense-date__day">{day}</div>
      </div>
   );
}

export default ExpenseDate;
