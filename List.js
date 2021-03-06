import React, { useState } from 'react'
import ListItem from '../components/List/ListItem'
import NewTaskInput from '../components/List/NewTaskInput'

const List = () =>{
    const [tasks, setTasks] = useState([])

    function addNewTask(task){
        const itensCopy = Array.from(tasks)
        itensCopy.push({ id: tasks.length, value: task })
        setTasks(itensCopy)
    }

    function updateTask({target}, index) {
        const itensCopy = Array.from(tasks)
        itensCopy.splice(index, 1, { id: index, value: target.value})
        setTasks(itensCopy)
    }

    function deleteTask(index) {
        const itensCopy = Array.from(tasks)
        itensCopy.splice(index, 1)
        setTasks(itensCopy)
    }

    return (
        <div>
            <div>
                <NewTaskInput onSubmit={addNewTask} />
                {tasks.map(({ id, value }, index) =>
                    <ListItem
                        key={id}
                        value={value}
                        onChange={(event) => updateTask(event, index)}
                        onDelete={()=> deleteTask(index)}
                    />
                )}
            </div>
            <div>
                <pre>
                    {JSON.stringify(tasks, null, 4)}
                </pre>

            </div>
        </div>
    )
}

export default List