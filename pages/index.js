import { useState } from 'react';

 function Home() {
  const [folders, setFolders] = useState([
    {
      name: 'Default',
      todos: [],
    },
    {
      name: 'Work',
      todos: [],
    },
    {
      name: 'Personal',
      todos: [],
    },
  ]);

  const [newTodoText, setNewTodoText] = useState('');
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState(null);

  const addTodo = () => {
    if (selectedFolder) {
      const updatedFolders = folders.map((folder) => {
        if (folder === selectedFolder) {
          return {
            ...folder,
            todos: [
              ...folder.todos,
              {
                text: newTodoText,
                completed: false,
              },
            ],
          };
        }
        return folder;
      });

      setFolders(updatedFolders);
      setNewTodoText('');
    }
  };

  const toggleCompleted = (todo) => {
    todo.completed = !todo.completed;
    setFolders([...folders]);
  };

  const editTodoFolder = (todo) => {
    const newTodoText = prompt('Enter the new todo text:', todo.text);
    if (newTodoText) {
      todo.text = newTodoText;
      setFolders([...folders]);
    }
  };

  const deleteTodoFolder = (todo) => {
    const updatedFolders = folders.map((folder) => {
      if (folder === selectedFolder) {
        const updatedTodos = folder.todos.filter((t) => t !== todo);
        return {
          ...folder,
          todos: updatedTodos,
        };
      }
      return folder;
    });

    setFolders(updatedFolders);
  };

  const addFolder = () => {
    const newFolder = {
      name: newFolderName,
      todos: [],
    };
    setFolders([...folders, newFolder]);
    setNewFolderName('');
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div>
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <br />
      <div>
        <input
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder="Enter folder name"
        />
        <button onClick={addFolder}>Add Folder</button>
      </div>
      <br />
      <div>
        <select
          value={selectedFolder ? selectedFolder : ''}
          onChange={(e) =>
            setSelectedFolder(
              folders.find((folder) => folder.name === e.target.value)
            )
          }
        >
          <option disabled value="">
            Select a folder
          </option>
          {folders.map((folder, folderIndex) => (
            <option key={folderIndex} value={folder}>
              {folder.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        {selectedFolder ? (
          <div>
            <h3>{selectedFolder.name}</h3>
            <ul>
              {selectedFolder.todos.map((todo, todoIndex) => (
                <li key={todoIndex}>
                  <span className={todo.completed ? 'strike-through' : ''}>
                    {todo.text}
                  </span>
                  <button onClick={() => toggleCompleted(todo)}>
                    Done
                  </button>
                  <button onClick={() => editTodoFolder(todo)}>Edit</button>
                  <button onClick={() => deleteTodoFolder(todo)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ):(
            <div>
            <p>No folder selected</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default Home