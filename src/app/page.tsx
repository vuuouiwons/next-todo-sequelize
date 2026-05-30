"use client";

import { useState, useEffect } from 'react';

// Define the shape of our Todo object
interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch('/api/edge/v1/todos');
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const res = await fetch('/api/edge/v1/todos', {
      method: 'POST',
      body: JSON.stringify({ title: newTodo }),
    });
    
    const addedTodo = await res.json();
    setTodos([addedTodo, ...todos]);
    setNewTodo('');
  };

  const toggleTodo = async (id: number, currentStatus: boolean) => {
    await fetch(`/api/edge/v1/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ completed: !currentStatus }),
    });

    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !currentStatus } : todo
    ));
  };

  const deleteTodo = async (id: number) => {
    await fetch(`/api/edge/v1/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo.id !== id));
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <main className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Next.js + Sequelize ToDo</h1>
      
      <form onSubmit={addTodo} className="flex gap-2 mb-8">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id, todo.completed)}
                className="w-5 h-5 cursor-pointer"
              />
              <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {todo.title}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Delete
            </button>
          </li>
        ))}
        
        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No tasks yet. Add one above!</p>
        )}
      </ul>
    </main>
  );
}