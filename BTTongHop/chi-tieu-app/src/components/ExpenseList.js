import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';

function ExpenseList({ expenses, onDelete, onEdit }) {
  const [editing, setEditing] = useState(null);

  const handleEditClick = (expense) => {
    setEditing(expense);
  };

  const handleUpdateDone = (updatedExpense) => {
    onEdit(updatedExpense);
    setEditing(null);
  };

  return (
    <div className="expense-list">
      {editing && (
        <ExpenseForm editingExpense={editing} onUpdateDone={handleUpdateDone} />
      )}
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
          onEdit={handleEditClick}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
