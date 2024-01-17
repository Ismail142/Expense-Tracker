import "./totalExpense.css";

function TotalExpense(props) {
   let totalAmount = props.expenses.reduce((accumulator,expense)=> expense.amount + accumulator,0);
   return (
      <div className="total-container">
         <div className="col">
            <div className="title">Total Amount</div>
         </div>
         <div className="col">
            <div className="expense-item__price">${totalAmount}</div>
         </div>
      </div>
   );
}

export default TotalExpense;
