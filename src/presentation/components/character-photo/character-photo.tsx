import React from "react";
import { CharacterThumbnailT } from "@/features/characters/domain/entities/Character";
import { buildUrl } from "@/features/characters/infrastructure/configs/urls";
import Image from "next/image";

interface IProps {
    thumbnail: CharacterThumbnailT
    width?: number
    height?: number
    fill?: boolean
    sizes?: string
}

const CharacterPhoto = (props: IProps) => {
    const { thumbnail, ...rest } = props
    const httpUrlImage = `${thumbnail.path}.${thumbnail.extension}`
    const httpsUrlImage = httpUrlImage.replace('http', 'https')

    const url = buildUrl(httpsUrlImage)

    return <Image src={url} alt='character photo' onError={() => {}} {...rest} />
}

export default CharacterPhoto