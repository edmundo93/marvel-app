import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IProps {
    selected?: boolean
    hovered?: boolean
    width?: number
    height?: number
}

const FavIcon = (props: IProps) => {
    const [src, setSrc] = useState<string>('/unselect-fav.svg')
    const [width, setWidth] = useState<number>(24)
    const [height, setHeight] = useState<number>(21.68)

    useEffect(() => {
        const icon = getSrc()
        setSrc(icon)
    }, [props.selected, props.hovered])

    useEffect(() => {
        setWidth(props.width ? props.width : 24)
        setHeight(props.height ? props.height : 21.68)
    }, [props.width, props.height])

    const getSrc = () => {
        if (props.selected) {
            if (props.hovered) {
                return '/hover-select-fav.svg'
            }
            return '/select-fav.svg'
        }
        return '/unselect-fav.svg'
    }

    return <Image src={src} alt='fav icon' width={width} height={height} />
}

export default FavIcon