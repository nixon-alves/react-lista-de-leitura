import './todo-item.style.css'
import { IconPencil, IconTrash } from "../icons";
import TodoContext from "../TodoProvider/TodoContext.js";
import {use} from "react";

export function ToDoItem ({ item }) {
    const { changeStatus, openFormTodoDialog, openDeleteTodoDialog } = use(TodoContext)

    const styles = ['todo-item']

    return (
        <li className={styles.join(' ')}>
            <p className="date">
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className="details">
                <p className="description">
                    {item.description}
                </p>
                <select
                  className="status"
                  value={item.status}
                  onChange={(event) => {
                      changeStatus(item, event.target.value)
                  }}
                >
                    <option value="quero-ler">Quero ler</option>
                    <option value="lendo">Lendo</option>
                    <option value="lido">Lido</option>
                </select>
                <div className="actions">
                    <button className="btn" onClick={() => openDeleteTodoDialog(item)}>
                        <IconTrash />
                    </button>
                    <button
                      className="btn"
                      onClick={() => openFormTodoDialog(item)}
                    >
                        <IconPencil />
                    </button>
                </div>
            </div>
        </li>
    )
}