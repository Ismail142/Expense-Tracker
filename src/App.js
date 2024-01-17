import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
   const [expenses, addExpense] = useState([]);

   const addExpenseHandler = (expense) => {
      addExpense((prevData) => [expense, ...prevData]);
   };

   return (
      <div>
         <NewExpense onAddExpense={addExpenseHandler}/>
         <Expenses item={expenses} />
      </div>
   );
}

export default App;
