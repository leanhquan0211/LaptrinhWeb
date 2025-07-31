import React, { useState, useEffect } from 'react';

function ExpenseForm({ onAdd, editingExpense, onUpdateDone }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);


  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: editingExpense ? editingExpense.id : Date.now(),
      title,
      amount,
      date: date || new Date().toISOString().split('T')[0],
    };

    if (editingExpense) {
      onUpdateDone(newExpense);
    } else {
      onAdd(newExpense);
    }

    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form onSubmit={handleSubmit} className={`expense-form ${editingExpense ? 'editing' : ''}`}
>
    
      <input
        type="text"
        placeholder="Tên khoản chi"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Số tiền"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">{editingExpense ? 'Cập nhật' : 'Thêm'}</button>
    </form>
  );
}

export default ExpenseForm;
