import React from 'react'
import ReactDOM from 'react-dom'

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

export default InputLine;
