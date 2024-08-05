import { useCallback, useEffect, useState } from 'react';
import { Character } from '@/features/characters/domain/entities/Character';
import { useCharacters } from '@/presentation/contexts/characters-context/characters.context';
import {
  addFavCharacter,
  removeFavCharacter,
} from '@/presentation/contexts/characters-context/actions';
import InfoBar from '@/presentation/components/info-bar/info-bar';

import styles from './character-resume.module.css';
import Photo from '../../photo/photo';
import FavIcon from '@/presentation/components/fav-icon/fav-icon';
import IconButton from '@/presentation/components/ui/icon-button/icon-button';

interface IProps {
  character: Character;
}

const CharacterResume = (props: IProps) => {
  const { dispatch, favCharacters } = useCharacters();
  const [fav, setFav] = useState<boolean>(false);

  useEffect(() => {
    if (favCharacters?.length) {
      const isFav = favCharacters.some(
        (character) => props.character?.id === character.id,
      );
      setFav(isFav);
    } else {
      setFav(false);
    }
  }, [favCharacters, props.character]);

  const favIconClickHandler = useCallback(() => {
    if (!fav) {
      addFavCharacter(dispatch, props.character as Character);
    } else {
      removeFavCharacter(dispatch, props.character as Character);
    }
  }, [fav, props.character]);

  return (
    props.character && (
      <InfoBar className={styles.characterResume}>
        <div className={styles.resumeContent}>
          <div className={styles.resumePhoto}>
            <Photo
              thumbnail={props.character?.thumbnail}
              fill={true}
              sizes="100%"
            />
          </div>
          <div className={styles.resumeInfo}>
            <div className={styles.characterTitle}>
              {props.character?.name}
              <IconButton
                width={24}
                height={21.68}
                icon={<FavIcon width={24} height={21.68} selected={fav} />}
                onClick={favIconClickHandler}
              />
            </div>
            <div className={styles.characterDescription}>
              {props.character?.description}
            </div>
          </div>
        </div>
      </InfoBar>
    )
  );
};

export default CharacterResume;
