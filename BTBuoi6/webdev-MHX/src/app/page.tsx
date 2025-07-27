'use client';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task: Task = {
      id: uuidv4(),
      title: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id: string, newTitle: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-white">Todo App</h1>
        <div className="w-full max-w-[450px] mb-4 mx-auto relative">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-400 px-2 py-1 pr-16 w-full "
            placeholder="Enter new task"
          />
          <button
            onClick={addTask}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 hover:bg-yellow-600 border border-yellow-400"
          >
            Add
          </button>
        </div>
      <TodoList
        tasks={tasks}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </main>
  );
}
