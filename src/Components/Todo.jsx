import { useState } from "react";

function Todo() {
    const [data, setData] = useState([
        { id: 1, title: "Learn React", completed: false, description: "Learn React from scratch" },
        { id: 2, title: "Learn Node", completed: false, description: "Learn Node from scratch" },
        { id: 3, title: "Learn Express", completed: false, description: "Learn Express from scratch" },
    ]);
    const [newTodo, setNewTodo] = useState({ title: "", completed: false, description: "" });

    const add = (e) => {
        e.preventDefault();
        setData([...data, { ...newTodo, id: data.length + 1 }]);
        //spreading the remaining data and adding the new todo
        setNewTodo({ title: "", completed: false, description: "" });
        //resetting the form after adding the new todo
    };

    const edit = (id) => {
        const editItem = data.find((todo) => todo.id === id);
        //finding the todo item to edit
        setNewTodo({ ...editItem });
        //setting the todo item to the form
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setData(
            data.map((todo) => //mapping through the data
                todo.id === newTodo.id //checking if the todo id matches the new todo id
                    ? { ...todo, title: newTodo.title, description: newTodo.description }//updating the todo
                    : todo //returning the todo as it is if the id doesn't match
            )
        );
        setNewTodo({ title: "", completed: false, description: "" });//resetting the form after updating the todo
    };

    const deleteItem = (id) => {
        setData(data.filter((todo) => todo.id !== id));//filtering out the todo item to delete
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">To-Do List</h1>

            {/* User Data List */}
            <ul className="mb-6 bg-white rounded-lg shadow-md p-4 divide-y">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Todos</h2>
                {data.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex justify-between items-center py-2"
                    >
                        <li className="text-lg text-gray-800">
                            {todo.title} - {todo.description}
                        </li>
                        <div className="flex gap-2">
                            <button
                                onClick={() => edit(todo.id)}
                                className="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteItem(todo.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </ul>

            {/* Form */}
            <form
                onSubmit={newTodo.id ? handleUpdate : add}
                className="bg-white rounded-lg shadow-md p-6"
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    {newTodo.id ? "Update Todo" : "Add Todo"}
                </h2>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={newTodo.title}
                        onChange={(e) =>
                            setNewTodo({ ...newTodo, title: e.target.value })
                        }
                        placeholder="Enter task title"
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <textarea
                        value={newTodo.description}
                        onChange={(e) =>
                            setNewTodo({ ...newTodo, description: e.target.value })
                        }
                        placeholder="Enter task description"
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        type="submit"
                        className={`px-6 py-2 rounded-lg shadow transition ${
                            newTodo.id
                                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                    >
                        {newTodo.id ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Todo;
