import './todo-group.style.css'
import {ToDoItem} from "../ToDoItem/index.jsx";
import {ToDoList} from "../ToDoList/index.jsx";
import {SubHeading} from "../SubHeading/index.jsx";

export function TodoGroup({ items, heading, emptyMessage }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>

      <ToDoList>
        {items.length === 0 && (
          <p className="empty-message">{emptyMessage}</p>
        )}

        {items.map(function (t) {
          return (
            <ToDoItem
              key={t.id}
              item={t}
            />
          )
        })}
      </ToDoList>
    </>
  )
}