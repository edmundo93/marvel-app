import CharacterDetail from "@/presentation/components/character-detail/character-detail"
import { Suspense } from "react"
import Loading from "./loading"

const CharacterPage = () => {
    return <Suspense fallback={<Loading />}>
        <CharacterDetail />
    </Suspense>
}

export default CharacterPage