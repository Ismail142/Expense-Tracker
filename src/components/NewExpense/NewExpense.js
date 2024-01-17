import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
   const [visible, setVisible] = useState(true);
   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
   };

   const updateVisibility = () => {
      if (visible) setVisible(false);
      else setVisible(true);
   };

   return (
      <div className="new-expense">
         {visible && 
            <ExpenseForm
               onSaveExpenseData={saveExpenseDataHandler}
               cancel={updateVisibility}
            />
         }
         {
            !visible && <button onClick={updateVisibility}>Add Expense</button>
         }
      </div>
   );
}
export default NewExpense;
