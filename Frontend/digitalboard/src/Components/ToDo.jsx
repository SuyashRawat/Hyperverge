import React, { useState, useEffect } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import '../styles/ToDoList.css';

const priorityColors = {
  low: '#d3d3d3',
  medium: '#ffcc00',
  high: '#ff4d4d',
};

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ text: '', dueDate: '', priority: 'low' });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.text.trim()) {
      setTasks([...tasks, { id: Date.now(), ...newTask, completed: false }]);
      setNewTask({ text: '', dueDate: '', priority: 'low' });
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return task.priority === filter;
  });

  return (
    <div className="todo-container">
      <h2>Tasks</h2>
      <div className="filters">
        {['all', 'completed', 'uncompleted', 'high', 'medium', 'low'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? 'active-filter' : ''}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks added</p>
      ) : (
        <ul className="todo-list">
          {filteredTasks.map(task => (
            <li key={task.id} className={`${task.completed ? 'completed' : 'uncompleted'} ${task.priority}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <span className="due-date">{task.dueDate}</span>
              <span className={`priority-indicator ${task.priority}`}></span>
              <button onClick={() => removeTask(task.id)} className="remove-button">
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="todo-input">
        <input
          type="text"
          value={newTask.text}
          onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
          placeholder="Add a new task"
        />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          {Object.keys(priorityColors).map(priority => (
            <option
              key={priority}
              value={priority}
              style={{ backgroundColor: priorityColors[priority], color: '#fff' }}
            >
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </option>
          ))}
        </select>
        <button onClick={addTask} className="add-button">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
