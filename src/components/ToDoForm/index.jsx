import './todo-form.style.css'
import {TextInput} from "../TextInput/index.jsx";
import {Button} from "../Button/index.jsx";

export function ToDoForm({ onSubmit, defaultValue }) {
  return (
    <form action={ onSubmit } className="todo-form">
      <TextInput
        placeholder="Digite o nome do livro que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />
      <Button>
        Salvar Item
      </Button>
    </form>
  )
}