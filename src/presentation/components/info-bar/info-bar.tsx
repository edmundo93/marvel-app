interface IProps {
    children: React.ReactNode
    className?: string
}

import styles from './info-bar.module.css'

const InfoBar = (props: IProps) => {
    return <div className={`${styles.infobar } ${props.className ?? ''}`}>
                {props.children}
                <div className={styles.corner}></div>
            </div>
}

export default InfoBar

