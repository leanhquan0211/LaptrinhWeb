import React from 'react';

function ExpenseItem({ expense, onDelete, onEdit }) {
  return (
    <div className="expense-item">
      <div className="expense-title">{expense.title}</div>
      <div className="expense-amount">{Number(expense.amount).toLocaleString()} VND</div>
      <div className="expense-date">{new Date(expense.date).toLocaleDateString('vi-VN')}</div>
      <div className="expense-actions">
        <button className='btn-edit' onClick={() => onEdit(expense)}>Sửa</button>
        <button className='btn-delete' onClick={() => onDelete(expense.id)}>Xoá</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
