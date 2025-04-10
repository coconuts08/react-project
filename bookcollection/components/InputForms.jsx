import { Book, BookOpen } from 'lucide-react';
import React, { useState } from 'react';
import Header from '../components/Header';


const InputForms = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const addTodo = () => {
    const trimmedTitle = bookTitle.trim();
    const trimmedAuthor = bookAuthor.trim();
    if (trimmedTitle && trimmedAuthor) {
      setTodoItems([...todoItems, { title: trimmedTitle, author: trimmedAuthor }]);
      setBookTitle('');
      setBookAuthor('');
    }
  };


  const deleteTodo = (indexToRemove) => {
    const filteredTodos = todoItems.filter((_, index) => index !== indexToRemove);
    setTodoItems(filteredTodos);
  };

  return (
    // ✅ Page Wrapper
    <section className="bg-blue-100 py-12 pb-100">
      
      <Header/>

      {/* ✅ Input Form Section */}
      <div className="container bg-white shadow-2xl rounded-2xl py-6 px-6 max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl mb-4">Add New Book</h3>
        
        {/* ✅ Book Title & Author Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium">Book Title</label>
            <input
              type="text"
              placeholder="Enter book title"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              placeholder="Enter author"
              value={bookAuthor}
              onChange={(e) => setBookAuthor(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTodo();
              }}
            />
          </div>
        </div>

        {/*Add Book Button */}
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md"
        >
          Add to Collection
        </button>
      </div>

      {/* Book List / Empty State */}
      <div className="container max-w-2xl mx-auto text-center p-4 text-blue-800">
        {todoItems.length === 0 ? (
          //  Message when no books are added
          <>
         
            <h3 className="text-xl font-semibold">Your collection is empty</h3>
            <p>Start adding books to your reading journey</p>
          </>
        ) : (
          //  Displaying Book Cards
          <>
            <h3 className="text-xl font-semibold mb-4">Your Book Collection</h3>
            <ul className="flex flex-col-3 gap-5">
              {todoItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-white w-64 p-4 border rounded-2xl shadow-md text-left"
                >
                  <div className="mb-4">
                    <p className="font-bold text-lg text-blue-800">{item.title}</p>
                    <p className="text-sm text-gray-600">by {item.author}</p>
                  </div>

                  {/*  Delete Button */}
                  <button
                    onClick={() => deleteTodo(index)}
                    className="self-end text-red-500 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default InputForms;
