'use client';
import { Task } from '../page';
import TodoItem from './TodoItem';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ tasks, onToggle, onEdit, onDelete }: Props) => {
  return (
    <ul className="w-full max-w-md">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
