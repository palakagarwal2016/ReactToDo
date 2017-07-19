
import React from 'react'
import ReactDOM from 'react-dom'

class Todo extends React.Component {
   constructor(props) {
       super(props)
   }

   render() {
       return (
           <div>
               {this.props.completed ?
               <strike><li key={new Date()}><button type="button">X</button> {this.props.task}</li></strike> :
               <li><button type="button">X</button> {this.props.task}</li>}
           </div>
       )
   }
}

export default Todo;
