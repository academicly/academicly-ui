import { useState, useEffect, useRef } from "react";

export const useStorage = () => {
  const [state, setState] = useState({
    isLoggedIn: false
  });
  useEffect(() => {
    setState({ isLoggedIn: true });
  }, []);
  return [state, setState];
};
