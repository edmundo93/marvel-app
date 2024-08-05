
import { useFtechComics } from '@/features/characters/infrastructure/hooks/useFetchComics'
import Row from '@/presentation/components/ui/row/row'
import styles from './character-comics.module.css'
import { useMemo } from 'react'
import { ComicI, DateT } from '@/features/characters/domain/entities/Comic'
import { getYear } from '@/utils/date'
import ComicCard from '@/presentation/components/comic-card/comic-card'
import ProgressBar from '../../ui/progress-bar/progress-bar'

interface IProps {
    characterId: number
}

const CharacterComics = (props: IProps) => {
    const { comics } = useFtechComics(props.characterId)

    const getComicSalesDate = (dates: DateT[]): Date => {
        const onSaleDate = dates.find(date => date.type === 'onsaleDate')
        if (onSaleDate?.date) {
            return new Date(onSaleDate.date)
        }
        return new Date()
    }

    const sortedComics = useMemo(() => {
        if (comics?.length) {
            return comics.sort((a: ComicI, b: ComicI) => {
                const dateA: Date = getComicSalesDate(a.dates)
                const dateB: Date = getComicSalesDate(b.dates)

                return dateA.getTime() - dateB.getTime()
            })
        }
    }, [comics])

    const comicCards = useMemo(() => {
        if (sortedComics) {
            return sortedComics.map(sortedComic => {
                const onsaleDate = getComicSalesDate(sortedComic.dates)
                const year = getYear(onsaleDate)

                return <ComicCard key={sortedComic.id} thumbnail={sortedComic.thumbnail} title={sortedComic.title} year={year as number} />
            })
        }

        return []
    }, [sortedComics])

    return <div className={styles.comics}>
        <div className={styles.comicsContent}>
            <div className={styles.comicsTitle}>COMICS</div>
            <div className={styles.comicsList}>
                {!comics && <ProgressBar />}
                { sortedComics && sortedComics.length > 0 && <Row items={comicCards}  />}
            </div>
        </div>
    </div>
}

export default CharacterComics