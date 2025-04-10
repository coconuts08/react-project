import React from 'react'
const addTodo = () => {
    const trimmedTitle = bookTitle.trim();
    const trimmedAuthor = bookAuthor.trim();
    if (trimmedTitle && trimmedAuthor) {
      setTodoItems([...todoItems, { title: trimmedTitle, author: trimmedAuthor }]);
      setBookTitle('');
      setBookAuthor('');
    }
  };
const ActionButton = ({label}) => {
  return (
    <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-md"
        >
          Add to Collection
        </button>
  )
}

export default ActionButton