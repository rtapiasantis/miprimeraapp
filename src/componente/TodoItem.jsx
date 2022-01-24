import React from 'react'

export function TodoItem({todo, eliminarPost}){

    const {id, task1, task2, task3} = todo;

    const fnEliminarPost = () =>{
        eliminarPost(id);
    }
    
    return <div className="card cardNormal col-xs-12 col-md-3">
            <div className='card-body'>
            <i className="bi bi-x-lg equis" onClick={fnEliminarPost}></i>
                <h5 className='card-title'>{task1}</h5>
                <p className='card-text'>{task2}{task3}</p>
            </div>
            
        </div>
}
