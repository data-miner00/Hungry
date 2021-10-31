import { useState } from 'preact/hooks';
import { LOCAL_TOKEN } from '../utils/constants';

export const useLogin = () => {
  return (token?: string) => {
    const [tokenn, setToken] = useLocalStorage(LOCAL_TOKEN, '');

    if (!token) {
      // TODO
    }
  };
};

export const useLogout = () => {};

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err0r) {
      console.log(err0r);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
