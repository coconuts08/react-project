import React, { useState } from 'react';

const App = () => {
  const [todoItems, setTodoItems] = useState([]); // Stores the list of todos
  const [newTodo, setNewTodo] = useState(''); // Tracks the input value

  // Adds a new todo to the list if the input is not empty
  const addTodo = () => {
    const trimmedTodo = newTodo.trim();
    if (trimmedTodo) {
      setTodoItems([...todoItems, trimmedTodo]);
      setNewTodo('');
    }
  };

  // Deletes a todo by its index
  const deleteTodo = (indexToRemove) => {
    const filteredTodos = todoItems.filter((_, index) => index !== indexToRemove);
    setTodoItems(filteredTodos);
  };

  return (
    <section className="py-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="h-24 bg-blue-500 text-white p-6 rounded-t-2xl">
          <h2 className="text-xl font-semibold">To-Do List</h2>
        </div>

        {/* Body */}
        <div className="p-5 bg-gray-50 shadow-2xl rounded-b-2xl">
          {/* Input field and Add button */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Add a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTodo();
              }}
            />
            <button 
              onClick={addTodo}
              className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>

          {/* To-do items */}
          <div className="py-4">
            {todoItems.length === 0 ? (
              <p className="text-center text-gray-500 p-10">No todos to add yet</p>
            ) : (
              <ul className="mt-4 space-y-2">
                {todoItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
                  >
                    <span>{item}</span>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="bg-red-500 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
