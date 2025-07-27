'use client';
import { useState } from 'react';
import { Task } from '../page';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ task, onToggle, onEdit, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editTitle.trim() === '') return;
    onEdit(task.id, editTitle.trim());
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 rounded shadow p-2 mb-2">
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {isEditing ? (
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border px-1 py-0.5 rounded w-full border-gray-600 text-gray-500"
          />
        ) : (
          <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-600'}>
            {task.title}
          </span>
        )}
      </div>
      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-300 hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="text-blue-400 hover:underline"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
