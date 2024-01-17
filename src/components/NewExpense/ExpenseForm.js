import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
   const [enteredTitle, setEnteredTitle] = useState("");
   const [enteredAmount, setEnteredAmount] = useState("");
   const [enteredDate, setEnteredDate] = useState("");

   const updateValue = (fn, value) => fn(value);

   function submitHandler(event) {
      event.preventDefault();
      const expenseData = {
         title: enteredTitle,
         amount: +enteredAmount,
         date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
   }

   return (
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input
                  type="text"
                  value={enteredTitle}
                  onChange={(event) =>
                     updateValue(setEnteredTitle, event.target.value)
                  }
               />
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input
                  type="number"
                  value={enteredAmount}
                  min="0.01"
                  step="0.01"
                  onChange={(event) =>
                     updateValue(setEnteredAmount, event.target.value)
                  }
               />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input
                  type="date"
                  value={enteredDate}
                  min="2021-11-01"
                  onChange={(event) =>
                     updateValue(setEnteredDate, event.target.value)
                  }
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button onClick={props.cancel}>Cancel</button>
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
}

export default ExpenseForm;
