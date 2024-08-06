import React, { useCallback, useEffect, useState } from 'react';

import styles from './character-card.module.css';
import FavIcon from '@/presentation/components/fav-icon/fav-icon';
import { useCharacters } from '@/presentation/contexts/characters-context/characters.context';
import { Character } from '@/features/characters/domain/entities/Character';
import Photo from '@/presentation/components/photo/photo';
import IconButton from '@/presentation/components/ui/icon-button/icon-button';
import {
  addFavCharacter,
  addSelectedCharacter,
  removeFavCharacter,
} from '@/presentation/contexts/characters-context/actions';
import Link from 'next/link';
import InfoBar from '@/presentation/components/info-bar/info-bar';

interface IProps {
  character: Character;
}

const CharacterCard = (props: IProps) => {
  const { dispatch, favCharacters } = useCharacters();
  const [hovered, setHovered] = useState<boolean>(false);
  const [fav, setFav] = useState<boolean>(false);

  useEffect(() => {
    checkIsFav();
  }, [favCharacters, props.character]);

  const checkIsFav = () => {
    const isFav = favCharacters?.some(
      (favCharacter) => favCharacter.id === props.character.id,
    );
    setFav(isFav);
  };

  const onFavButtonClickHandler = useCallback(() => {
    const character = favCharacters.find(
      (character) => character.id === props.character.id,
    );
    if (character) {
      removeFavCharacter(dispatch, props.character);
    } else {
      addFavCharacter(dispatch, props.character);
    }
  }, [props.character, favCharacters]);

  const onMouseEnterHandler = () => {
    if (!navigator.maxTouchPoints) {
      setHovered(true);
    }
  };

  const onMouseLeaveHanlder = () => {
    setHovered(false);
  };

  const onClickHandler = () => {
    addSelectedCharacter(dispatch, props.character);
  };

  return (
    <Link
      href={`character/${props.character.id}`}
      onClick={onClickHandler}
      className={styles.link}
    >
      <div
        className={styles.card}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHanlder}
      >
        <div className={styles.photo}>
          <Photo thumbnail={props.character?.thumbnail} fill sizes="100%" />
          <div className={styles.separator}></div>
        </div>
        <InfoBar className={styles.info}>
          <div>{props.character.name}</div>
          <IconButton
            icon={
              <FavIcon
                width={12}
                height={10.84}
                selected={fav}
                hovered={hovered}
              />
            }
            onClick={onFavButtonClickHandler}
          />
        </InfoBar>
      </div>
    </Link>
  );
};

export default CharacterCard;
