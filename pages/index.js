import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [userInput, setUserInput] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    e.preventDefault()

    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoList([
      userInput,
      ...todoList
    ])

    setUserInput('')
  }

  const handleDelete = (todo) => {
    const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
    setTodoList(updateArr)

  }


  return (
    <div className={styles.pageContainer}>

        <Navbar/>

      <div className={styles.todoListContainer}>

        <div className={styles.todoListBox}>

          <div className={styles.header}>
            <h1>Liste des tâches</h1><i class="fad fa-clipboard-list"></i>
          </div>

      <div className={styles.todoListItems}>

      <div className={styles.todoListForms}>
        <form minLength="2">
          <input value={userInput} onChange={handleChange} type="text" placeholder="Ajouter une tâche .." id="item" autoComplete="off" minLength="2" />
        </form>
      </div>

      <div className={styles.todoListTasks}>
        <ul id="list">
          {
            todoList.length >=1 ? todoList.map((todo, idx) => {
              return <li key={idx}>{todo}<i class="fad fa-trash-alt" onClick={(e) => {
              e.preventDefault()
              handleDelete(todo)
              }}></i></li>
          })
          : "Enter a todo Item"
          }
        </ul>
      </div>

      </div>

      <div className={styles.todoListAddTasks}>
            <div className={styles.buttonContainer}>
                <i onClick={handleSubmit} class="fad fa-plus-hexagon"></i>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
