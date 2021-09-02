import React, {useState} from "react";

function TodoForm () {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // e.onSubmit({
        //     id: Math.floor(Math.random() *10000),
        //     text: input
        // })

        setInput("");

    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
                />

            <button className="todo-button">Add Todo</button>
        </form>


    );
}

export default TodoForm;
