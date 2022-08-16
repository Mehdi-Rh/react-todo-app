import React, { Component } from 'react'
import styles from "./TodoItem.module.css"

export default class TodoItem extends Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { completed, id, title } = this.props.todo

    return ( 
    <li className={styles.item} key={id}>
      <div style={viewMode}>
        <input 
          type="checkbox" 
          className={styles.checkbox}
          checked={completed}
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
        />
        
        <span onDoubleClick={this.handleEditing} style={(completed ? completedStyle : null)}>{title}</span>
        <button className="deleteBtn" onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>
      </div>
      <input type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          this.props.setUpdate(e.target.value, id)
        }} 
        onKeyDown={this.handleUpdatedDone}
   />

      
    </li>    )
  }
}
