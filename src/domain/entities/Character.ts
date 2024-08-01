type CharacterThumbnailT = {
  path: string;
  extension: string;
};

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: CharacterThumbnailT;
}
