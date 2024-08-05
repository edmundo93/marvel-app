const KEY_PREFIX = 'marvel-app-';

export const setItem = (key: string, value: any): void => {
  const storageKey = `${KEY_PREFIX}${key}`;
  sessionStorage.setItem(storageKey, JSON.stringify(value));
};

export const getItem = (key: string): any | null => {
  const storageKey = `${KEY_PREFIX}${key}`;
  const storedValue = sessionStorage.getItem(storageKey);
  return storedValue ? JSON.parse(storedValue) : null;
};
