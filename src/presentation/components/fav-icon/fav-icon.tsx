import React from "react";
import Image from "next/image";

import styles from './fav-icon.module.css'

interface IProps {
    selected?: boolean
    hovered?: boolean
    width?: number
    height?: number
}

const FavIcon = (props: IProps) => {
    if (props.selected) {
        if (props.hovered) {
            return <Image src='/hover-select-fav.svg' alt='selected hover fav' width={props.width ?? 24} height={props.height ?? 21.68} />
        }
        return <Image src='/select-fav.svg' alt='selected fav' width={props.width ?? 24} height={props.height ?? 21.68} />
    }
    return <Image src='/unselect-fav.svg' alt='unselect fav' width={props.width ?? 24} height={props.height ?? 21.68} />
}

export default FavIcon