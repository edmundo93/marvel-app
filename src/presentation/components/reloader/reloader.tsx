import styles from './reloader.module.css'

const Reloader = () => {

    const reloadClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        window.location.reload()
    }

    return <div className={styles.reloader}>
        <h1>NOT CHARACTERS AVAILABLE</h1>
        <button onClick={reloadClickHandler}>
            RELOAD
        </button>
    </div>
}

export default Reloader