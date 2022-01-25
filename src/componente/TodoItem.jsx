import React from 'react'

export function TodoItem({todo}){

    const {task1, task2, task3} = todo;

    
    
     if(task3===0){
        return <div className="card cardNormal col-xs-12 col-md-3 m-3">
            <div className='card-body'>
            <i className="bi bi-x-lg equis"></i>
                <h5 className='card-title'>{task1}</h5>
                <p className='card-text'>{task2}</p>
            </div>
            
        </div>
     }else{
        return <div className="card cardImportante col-xs-12 col-md-3 m-3">
            <div className='card-body'>
            <i className="bi bi-x-lg equis" ></i>
                <h5 className='card-title'>{task1}</h5>
                <p className='card-text'>{task2}</p>
            </div>
            
        </div>
     }
    
}
