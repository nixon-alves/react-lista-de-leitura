import { ReadingListWrapper} from "./components/ReadingListWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconBook } from "./components/icons"
import { Dialog } from "./components/Dialog/index.jsx";
import {use} from "react";
import {ToDoForm} from "./components/ToDoForm/index.jsx";
import TodoContext from "./components/TodoProvider/TodoContext.js";
import {TodoGroup} from "./components/TodoGroup/index.jsx";
import {DeleteConfirmation} from "./components/DeleteConfirmation/index.jsx";


function App() {

  const { todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo, editTodo, todoDelete, deleteTodo } = use(TodoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData)
    } else {
      addTodo(formData)
    }
    closeFormTodoDialog()
  }

  const handleDelete = () => {
    deleteTodo(todoDelete)
    closeFormTodoDialog()
  }


  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconBook/> Lista de Leitura
          </Heading>
        </Header>
        <ReadingListWrapper>
          <TodoGroup
            heading="Quero ler"
            items={todos.filter(t => t.status === 'quero-ler')}
            emptyMessage="Nenhum livro na sua lista de desejos."
          />
          <TodoGroup
            heading="Lendo"
            items={todos.filter(t => t.status  === 'lendo')}
            emptyMessage="Você não está lendo nenhum livro no momento."
          />
          <TodoGroup
            heading = "Lidos"
            items = {todos.filter(t => t.status === 'lido')}
            emptyMessage="Nenhum livro finalizado ainda."
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              {todoDelete ? (
                <DeleteConfirmation
                  onConfirm={handleDelete}
                  item={todoDelete}
                />
              ) : (
                <ToDoForm
                  onSubmit={handleFormSubmit}
                  defaultValue={selectedTodo?.description}
                />
              )}
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus/>
            </FabButton>
          </Footer>
        </ReadingListWrapper>
      </Container>
    </main>
  );
}

export default App
