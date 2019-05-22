import { useState, useEffect, useCallback } from "react";
import * as Cookies from "js-cookie";

/**
 * useCookies - to get/set cookies
 * @param key name
 * @param initialValue will be set if cookie doesn't exist
 * @returns Returns cookie value and the function to update it
 */
export const useCookies = (
  key: string,
  initialValue: object | string
): any[] => {
  const [cookie, setInnerCookie] = useState(
    () => Cookies.get(key) || initialValue
  );

  const setCookie = useCallback(
    (value: string | object) => {
      setInnerCookie(value);
      Cookies.set(key, value);
    },
    [key]
  );

  useEffect(() => {
    const item = Cookies.get(key);
    // only set the cookie if it doesn't exist
    // it won't update, unless you explicitly call setCookie from consumer
    if (!item && initialValue) {
      setCookie(initialValue);
    }
  }, [key, initialValue, setCookie]);

  return [cookie, setCookie];
};

export default useCookies;
