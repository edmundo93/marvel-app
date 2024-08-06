import styles from './row.module.css';

interface IProps {
  items: React.JSX.Element[];
}

const Row = (props: IProps) => {
  return <div className={styles.row}>{props.items}</div>;
};

export default Row;
