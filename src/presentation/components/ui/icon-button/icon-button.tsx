import React from "react";

import styles from './icon-button.module.css'

interface IProps {
    icon: React.JSX.Element
    onClick: () => void
    width?: number
    height?: number
}

const IconButton = (props: IProps) => {
    const { icon, onClick, ...rest } = props
    
    const onClickHnadler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        onClick()
    }

    return <button className={styles.iconButton} onClick={onClickHnadler} {...rest}>
        {icon}
    </button>
}

export default IconButton