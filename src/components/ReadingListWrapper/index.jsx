import './reading-list-wrapper.style.css'

export function ReadingListWrapper({ children }) {
    return <section className='wrapper'>
        {children}
    </section>
}