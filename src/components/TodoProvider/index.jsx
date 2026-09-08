import TodoContext from "./TodoContext.js";
import {useEffect, useState} from "react";

const TODOS = 'todos';

export function TodoProvider({children}) {

  const savedTodos = localStorage.getItem(TODOS)

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : [])
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [todoDelete, setTodoDelete] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo)
    }
    setShowDialog(true)
  }

  const closeFormTodoDialog = () => {
    setShowDialog(false)
    setSelectedTodo(null)
    setTodoDelete(null)
  }

  const openDeleteTodoDialog = (todo) => {
    setTodoDelete(todo)
    setShowDialog(true)
  }

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos))
  }, [todos]);

  const addTodo = (formData) => {
    const description = formData.get('description')
    setTodos(prevState => {
      const todo = {
        id: prevState.length + 1,
        description,
        status: 'quero-ler',
        createdAt: new Date().toISOString()
      }
      return [...prevState, todo]
    })
  }

  const changeStatus = (todo, newStatus) => {
    setTodos(prevState => {
      return prevState.map(t => {
        if (t.id == todo.id) {
          return {
            ...t,
            status: newStatus
          }
        }
        return t
      })
    })
  }

  const editTodo = (formData) => {
    setTodos(prevState => {
      return prevState.map(t => {
        if (t.id == selectedTodo.id) {
          return {
            ...t,
            description: formData.get('description')
          }
        }
        return t
      })
    })
  }

  const deleteTodo = (todo) => {
    setTodos(prevState => {
      return prevState.filter(t => t.id != todo.id)
    })
  }

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        changeStatus,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        openDeleteTodoDialog,
        selectedTodo,
        editTodo,
        todoDelete
      }}
    >
      {children}
    </TodoContext>
  )
}