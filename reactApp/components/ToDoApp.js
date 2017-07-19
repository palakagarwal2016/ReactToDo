import React from 'react'
import ReactDOM from 'react-dom'
import InputLine from './InputLine';
import TodoList from './ToDoList'

var dummyData = [
   {
       taskText: 'Be cool',
       completed: false
   },
   {
       taskText: 'Do a face Mask',
       completed: true
   },
   {
       taskText: 'Do laundry',
       completed: false
   }
]

class TodoApp extends React.Component {
   constructor(props) {
       super(props)
  this.state={todos: []}
   }

componentDidMount(){
  this.setState({todos: dummyData})
}

   render() {
       return (
           <div>
               <InputLine />
               <TodoList todos={this.state.todos}/>
           </div>
       )
   }
}

export default TodoApp;
