import './delete-confirmation.style.css'

export function DeleteConfirmation({ onConfirm, item }) {
  return (
    <section className="delete-confirmation">
      <p>
        Tem certeza que deseja excluir
        <strong> "{item.description}" </strong>
        da sua lista?
      </p>
      <button
        className="delete-button"
        onClick={onConfirm}
      >
        Excluir
      </button>
    </section>
  )
}