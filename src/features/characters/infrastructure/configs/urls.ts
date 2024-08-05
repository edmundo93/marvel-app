export const baseUrl = 'https://gateway.marvel.com/v1/public/';
// 'https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=8c296a157a785ac2841266389a93079f&hash=44ac64caef73cf065b1e1368f785995d';

//https://gateway.marvel.com/v1/public/characters/1010903/comics?ts=1&apikey=8c296a157a785ac2841266389a93079f&hash=f45003be5e84052c0d2df4d1e3440982&limit=20 WORKS

//https://gateway.marvel.com/v1/public/characters/1010354/comics?ts=1&apikey=8c296a157a785ac2841266389a93079f&hash=f45003be5e84052c0d2df4d1e3440982/&limit=20

export const buildUrl = (url: string): string => {
  return `${url}?ts=1&apikey=8c296a157a785ac2841266389a93079f&hash=f45003be5e84052c0d2df4d1e3440982`;
};
