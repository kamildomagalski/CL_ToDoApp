import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {getTasks} from './api/tasks'
import {getOperations} from './api/operations'

import Task from "./Task";
import NewTask from "./NewTask";

function App() {
  const [data, setData] = useState(false);
  
  useEffect(() => getTasks((data) => {
      setData(data)
    }
  ), []);
  

  if(data === false){
    return null
  }
  
  return (
    <>
      <main id="app" className="container mb-5">
      <NewTask/>
      <ul>
        {data.map(el => <Task data={el}/>)}
      </ul>
      </main>
    </>
  )
}

ReactDOM.render(<App/>, document.querySelector("#app"));