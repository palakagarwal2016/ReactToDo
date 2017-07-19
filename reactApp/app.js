import React from 'react'
import ReactDOM from 'react-dom'

var dummyData = [
   {
       taskText: 'Do Laundry',
       completed: false
   },
   {
       taskText: 'Go Shopping',
       completed: true
   },
   {
       taskText: 'Do a face mask',
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

class InputLine extends React.Component {
   constructor(props) {
       super(props)
   }
   render() {
       return (
           <div>
               <form>
                   <input type="text" placeholder="Task"/>
                   <input type="submit" />
               </form>
           </div>
       )
   }
}

class TodoList extends React.Component {
   constructor(props) {
       super(props)
   }
   render() {
       return (
           <ul>
               {this.props.todos.map((todoItem) => <Todo task={todoItem.taskText} completed={todoItem.completed}/>)}
           </ul>
       )
   }
}

class Todo extends React.Component {
   constructor(props) {
       super(props)
   }

   render() {
       return (
           <div>
               {this.props.completed ?
               <strike><li><button type="button">X</button> {this.props.task}</li></strike> :
               <li><button type="button">X</button> {this.props.task}</li>}
           </div>
       )
   }
}


ReactDOM.render(<TodoApp />,
  document.getElementById('root'));
