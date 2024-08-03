import React, { useState } from 'react'

import styles from './character-card.module.css'
import Image from 'next/image'
import FavIcon from '../fav-icon/fav-icon'
import { useFavCharacters } from '@/presentation/contexts/fav-characters-context/fav-characters.context'
import { Character } from '@/features/characters/domain/entities/Character'
import { buildUrl } from '@/features/characters/infrastructure/configs/urls'

interface IProps {
    character: Character
}

const CharacterCard = (props: IProps) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [fav, setFav] = useState<boolean>(false)

    const httpUrlImage = `${props.character.thumbnail.path}.${props.character.thumbnail.extension}`
    const httpsUrlImage = httpUrlImage.replace('http', 'https')

    const url = buildUrl(httpsUrlImage)

    const onFavButtonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setFav(!fav)
    }

    const onMouseEnterHandler = () => {
        setHovered(true)
    }

    const onMouseLeaveHanlder = () => {
        setHovered(false)
    }

    return <div className={styles.card} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHanlder} >
        <div className={styles.photo}>
            <Image fill={true} src={url} sizes='max-width: 172.5px' alt='character photo' onError={() => {}} />
            <div className={styles.separator}></div>
        </div>
        <div className={styles.info}>
            <div>{ props.character.name}</div>
            <button onClick={onFavButtonClickHandler} className={styles.favButton}><FavIcon width={12} height={10.84} selected={fav} hovered={hovered} /></button>
        </div>
    </div>
}

export default CharacterCard