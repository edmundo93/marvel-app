type urlT = {
  type: string;
  url: string;
};

type SeriesT = {
  resourceURI: string;
  name: string;
};

export type DateT = {
  type: string;
  date: string;
};

type PriceT = {
  type: string;
  price: number;
};

type ThumbnailT = {
  path: string;
  extension: string;
};

type CollectionItem = {
  resourceURI: string;
  name: string;
  role?: string;
  type?: string;
};

type CollectionT = {
  available: number;
  collectionUri: string;
  items: CollectionItem[];
};

export interface ComicI {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: urlT[];
  series: SeriesT;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: DateT[];
  prices: PriceT[];
  thumbnail: ThumbnailT;
  images: ThumbnailT[];
  creators: CollectionT;
  characters: CollectionT;
  stories: CollectionT;
  events: CollectionT;
}
