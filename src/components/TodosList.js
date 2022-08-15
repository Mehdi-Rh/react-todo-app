import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
         />
        ))}
      </ul>
      )
  }
}
