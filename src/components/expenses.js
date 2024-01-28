import React, {useState} from 'react';
import Card from './Card';
import './expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}  
      />
      <ExpensesChart Expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </div>
  );
};

export default Expenses;