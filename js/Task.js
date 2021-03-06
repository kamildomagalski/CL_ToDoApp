import React, {useState} from 'react';


function Task({data}) {
  
  
  console.log(data);
  
  return (
    <section className="card mt-5 shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h5>{data.title}</h5>
          <h6 className="card-subtitle text-muted">{data.description}</h6>
        </div>
        
        <div>
          <button className="btn btn-info btn-sm mr-2">
            Add operation
            <i className="fas fa-plus-circle ml-1"></i>
          </button>
          
          <button className="btn btn-dark btn-sm">
            Finish
            <i className="fas fa-archive ml-1"></i>
          </button>
        </div>
      </div>
    </section>
  
  );
}

export default Task;