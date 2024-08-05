'use client'

import MainView from "@/presentation/components/main-view/main-view"
import { useCharacters } from "@/presentation/contexts/characters-context/characters.context"

import styles from './favorites-view.module.css'

const FavoritesView = () => {
    const { favCharacters } = useCharacters()
    return <>
        <div className={styles.pageTitle}>
            <div className={styles.title}>FAVORITES</div>
        </div>
        <MainView characters={favCharacters} />
    </>
}

export default FavoritesView