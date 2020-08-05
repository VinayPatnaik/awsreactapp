import React,{Component} from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  state = {todos: []};

  async componentDidMount(){
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({todos:result.data});
    console.log(result);
  }

  render(){
    return (
      <div className = 'container'>
        {this.state.todos.length>0 ? (
        <div>
          <ul className="list-group">
          {this.state.todos.map(todo=>
          
             <li key ={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
    {todo.title}
    <span className="">
      <input type = "checkbox" checked={todo.completed}/>
    </span>
  </li>
  
          
          )}
          </ul>
          </div>
          
          ):(
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
       ) 
      }
      </div>
    );
  }
}

export default App;
