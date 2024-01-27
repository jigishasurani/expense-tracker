import React, {useState} from 'react';

import ExpenseItem from './expenseitem';
import Card from './Card';
import './expenses.css';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}  
      />

      {props.iteam.map((expenses) => (
        <ExpenseItem
        title={expenses.title}
        amount= {expenses.amount}
        date={expenses.date} 
        />
      ))}
    </Card>
    </div>
  );
};

export default Expenses;