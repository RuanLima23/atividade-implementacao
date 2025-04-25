'use client';
import { useEffect, useState } from 'react';
import api from '../services/api';

type Todo = {
  id: number;
  title: string;
  createdAt: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  const fetchTodos = async () => {
    const res = await api.get('/todos');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;
    await api.post('/todos', { title });
    setTitle('');
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await api.delete(`/todos/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>📝 To-Do List</h1>
  
      <div style={styles.card}>
        <div style={styles.form}>
          <input
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite sua tarefa"
          />
          <button style={styles.addButton} onClick={addTodo}>
            ➕ Adicionar
          </button>
        </div>
  
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', opacity: 0.7 }}>Nenhuma tarefa ainda.</p>
        ) : (
          <ul style={styles.list}>
            {todos.map((todo) => (
              <li key={todo.id} style={styles.listItem}>
                <span>{todo.title}</span>
                <button style={styles.removeButton} onClick={() => deleteTodo(todo.id)}>
                  🗑️ Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: '#1e1e1e',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#121212',
    color: '#f4f4f4',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  addButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#2a2a2a',
    marginBottom: '0.75rem',
    padding: '1rem',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  
  removeButton: {
    padding: '0.4rem 0.75rem',
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
