/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage - to save data to localStorage
 * @param key to use to save
 * @param initialValue the value to be saved
 * @returns Returns storage value and the function to update it
 */
export const useLocalStorage = (key: string, initialValue: any): any[] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const [error, setError] = useState(null);
  // allow value to be set
  const setValue = useCallback(
    (value: any) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        //set error if there's any during parse/storage full
        setError(error);
      }
    },
    [key]
  );

  // if value initially doesn't already exist, set the item to localStorage
  // it won't update if it exists, unless you explicitly call setValue
  useEffect(() => {
    const item = localStorage.getItem(key);
    if (!item && initialValue) {
      setValue(initialValue);
    }
  }, [initialValue, key, setValue]);

  return [storedValue, setValue, error];
};

export default useLocalStorage;
