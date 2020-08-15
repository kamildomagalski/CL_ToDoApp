import React, {useState, useEffect} from 'react';


function NewTask() {
  const [newTask, setNewTask] = useState({
    title: null,
    description: null
  })
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setNewTask({
      [event.target.name]: event.target.value
      
    })
  }
  console.log(newTask);
  return (
    <div className="card shadow">
      <div className="card-body">
        <h1 className="card-title">New task</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="title"
                   placeholder="Title"/>
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   name="description"
                   placeholder="Description"/>
          </div>
          <button className="btn btn-info">
            Add task
            <i className="fas fa-plus-circle ml-1"></i>
          </button>
          <h5>{newTask.title}</h5>
        </form>
      </div>
    </div>
  );
}

export default NewTask;