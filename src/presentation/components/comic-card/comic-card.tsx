import styles from './comic-card.module.css';
import Photo from '@/presentation/components/photo/photo';
import { ThumbnailT } from '@/features/characters/domain/entities/Character';

interface IProps {
  thumbnail: ThumbnailT;
  title: string;
  year: number;
}

const ComicCard = (props: IProps) => {
  return (
    <div className={styles.comicCard}>
      <div className={styles.comicPhoto}>
        <Photo thumbnail={props.thumbnail} fill={true} sizes="width:100%" />
      </div>
      <div className={styles.comicInfo}>
        <div className={styles.comicTitle}>{props.title}</div>
        <div className={styles.comicYear}>{props.year}</div>
      </div>
    </div>
  );
};

export default ComicCard;
