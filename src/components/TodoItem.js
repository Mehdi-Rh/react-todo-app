import React, { Component } from 'react'
import styles from "./TodoItem.module.css"

export default class TodoItem extends Component {
  render() {

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { completed, id, title } = this.props.todo

    return ( 
    <li className={styles.item} key={id}>
      <input 
        type="checkbox" 
        className={styles.checkbox}
        checked={completed}
        onChange={() => this.props.handleChangeProps(id)}
      />
      <span style={completed ? completedStyle : null}>{title}</span>
      <button className="deleteBtn" onClick={() => this.props.deleteTodoProps(id)}>
  Delete
</button>
    </li>    )
  }
}
