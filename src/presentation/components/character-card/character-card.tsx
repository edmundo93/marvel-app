import React, { useCallback, useEffect, useState } from 'react'

import styles from './character-card.module.css'
import FavIcon from '../fav-icon/fav-icon'
import { useFavCharacters } from '@/presentation/contexts/fav-characters-context/fav-characters.context'
import { Character } from '@/features/characters/domain/entities/Character'
import CharacterPhoto from '../character-photo/character-photo'
import IconButton from '../ui/icon-button/icon-button'
import { addFavCharacter, removeFavCharacter } from '@/presentation/contexts/fav-characters-context/actions'

interface IProps {
    character: Character
}

const CharacterCard = (props: IProps) => {
    const { dispatch, favCharacters } = useFavCharacters()
    const [hovered, setHovered] = useState<boolean>(false)
    const [fav, setFav] = useState<boolean>(false)

    useEffect(() => {
        checkIsFav()
    }, [favCharacters, props.character])

    const checkIsFav = () => {
        const isFav = favCharacters?.some(favCharacter => favCharacter.id === props.character.id)
        setFav(isFav)
    }

    const onFavButtonClickHandler = useCallback(() => {
        const character = favCharacters.find(character => character.id === props.character.id)
        if (character) {
            removeFavCharacter(dispatch, props.character)
        } else {
            addFavCharacter(dispatch, props.character)
        }
    }, [props.character, favCharacters])

    const onMouseEnterHandler = () => {
        if (!navigator.maxTouchPoints) {
            setHovered(true)
        }
    }

    const onMouseLeaveHanlder = () => {
        setHovered(false)
    }

    return <div className={styles.card} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHanlder} >
        <div className={styles.photo}>
            <CharacterPhoto thumbnail={props.character.thumbnail} fill sizes='max-width: 172.5px' />
            <div className={styles.separator}></div>
        </div>
        <div className={styles.info}>
            <div>{props.character.name}</div>
            <IconButton icon={<FavIcon width={12} height={10.84} selected={fav} hovered={hovered} />} onClick={onFavButtonClickHandler} />
        </div>
        <div className={styles.corner}></div>
    </div>
}

export default CharacterCard