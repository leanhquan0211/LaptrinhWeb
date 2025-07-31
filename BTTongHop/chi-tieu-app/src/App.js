import React, { useState, useEffect } from 'react';
// App.js
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const editExpense = (updatedExpense) => {
    setExpenses(expenses.map(exp => exp.id === updatedExpense.id ? updatedExpense : exp));
  };

  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="App">
      <h1>Quản Lý Chi Tiêu</h1>
      <ExpenseForm onAdd={addExpense} />
      <h2>Tổng chi: {total.toLocaleString()} VND</h2>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} onEdit={editExpense} />
    </div>
  );
}

export default App;
