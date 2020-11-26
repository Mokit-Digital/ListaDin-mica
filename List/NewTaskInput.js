import React, { useState } from 'react'

const NewTaskInput = ({ onSubmit }) =>{
    const [newItem, setNewItem] = useState()

    function setNewTask({ target }) {
        setNewItem(target.value)
    }

    function submit(e) {
        e.preventDefault() //impede que a página seja carregada
        onSubmit(newItem)
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input 
                    className="todo-input"
                    placeholder="Digite uma nova tarefa"
                    onChange={setNewTask}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
}

export default NewTaskInput