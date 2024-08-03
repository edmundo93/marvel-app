export const baseUrl =
  'https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=8c296a157a785ac2841266389a93079f&hash=44ac64caef73cf065b1e1368f785995d';

export const buildUrl = (url: string): string => {
  return `${url}?ts=1000&apikey=8c296a157a785ac2841266389a93079f&hash=44ac64caef73cf065b1e1368f785995d`;
};
