import React, { Fragment, useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import { TodoItem } from './TodoItem';

const KEY = "todolist-todos"

export function TodoList(){

    const [todos, setTodos] = useState([]);

    const taskRef1 = useRef();
    const taskRef2 = useRef();
    const taskRef3 = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos){
            setTodos(storedTodos);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos])

    const agregarTarea = () => {
        
        const task1 = taskRef1.current.value;
        const task2 = taskRef2.current.value;
        var task3 = taskRef3.current.checked;
        //alert(task3)
        if (task2 === ''){ 
            alert("Debe ingresar como mínimo la descripción del Post It");
            return;
        }
        //identifico el PosIt declarado como importante!
        if(task3===true){task3=1}else{task3=0}

        setTodos((prevTodos) => {
            const newTask = {
                id: uuid(),
                task1: task1,
                task2: task2,
                task3: task3
            }

            return [...prevTodos, newTask]
        })

        taskRef1.current.value = null
        taskRef2.current.value = null
        taskRef3.current.checked = false
    }

    
      
    return (

        <Fragment>
            <h1>Post It Simulator</h1>

            <div className="input-group mt-4 mb-4">
                <input ref={taskRef1} placeholder='Título' className="form-control" type="text"></input>
                <input ref={taskRef2} placeholder='Descripción' className="form-control" type="text" required></input>
                <input ref={taskRef3} className="form-check-input m-2" type="checkbox"></input>Importante!
                <button onClick={agregarTarea} className="btn btn-dark ms-2"><i className="bi">Agregar</i></button>
                
            </div>
            <div className="container row">
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))}
            </div>
           
        
            
        </Fragment>

    );
}
