export type ThumbnailT = {
  path: string;
  extension: string;
};

type CollectionItemT = {
  resourceURI: string;
  name: string;
  type?: string;
};

type CharacterCollectionT = {
  available: number;
  collectionURI: string;
  items: CollectionItemT[];
  returned: number;
};

type CharacterUrlItemT = {
  type: string;
  url: string;
};

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: ThumbnailT;
  resourceURI: string;
  comics: CharacterCollectionT;
  series: CharacterCollectionT;
  stories: CharacterCollectionT;
  events: CharacterCollectionT;
  urls: CharacterUrlItemT[];
}
