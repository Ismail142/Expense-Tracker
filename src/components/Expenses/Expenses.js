import { useState } from "react";
import Card from "../../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import TotalExpense from "./totalExpense";

function Expenses(props) {
   const [filteredYear, setFilteredYear] = useState("2020");
   const filteredExpenses = props.item.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
   );

   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
   };

   return (
      <Card className="expenses">
         <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
         />
         <ExpensesChart expenses={filteredExpenses} />
         <ExpensesList items={filteredExpenses} />
         <TotalExpense expenses={filteredExpenses}/>
      </Card>
   );
}

export default Expenses;
