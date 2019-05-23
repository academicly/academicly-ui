/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';

interface ReturnType {
  loading: boolean;
  data: any;
  error: null | Error | string;
  doCall: void | any;
}

const defaultOptions: RequestInit = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * useFetch - to make async requests
 * @param url endpoint to make the call to
 * @param type of request ['GET'] is set by default
 * @param postData data to be sent
 * @param options options to be sent [defaultOptions] is set if nothing is passed
 * @param cache true if response should be cached
 */
export const useFetch = (
  url: string,
  type = 'GET',
  postData = null,
  options = defaultOptions,
  cache = false
): ReturnType => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [payload, setPayload] = useState(postData);

  // in case a new payload needs to be submitted
  // type will still be type passed to useFetch()
  const doCall = useCallback((newPayload: any) => {
    setPayload(newPayload);
  }, []);

  useEffect(() => {
    const sendRequest = async () => {
      setLoading(true);
      try {
        //For any request we want to use as useFetch(url) for GET
        //useFetch(url, POST, data) for mutations
        //useFetch(url, POST, data, options) in case we want to extend
        const response = await fetch(url, {
          ...options,
          body: JSON.stringify(payload),
          method: type
        });
        if (response.ok) {
          setData(await response.json());
        } else {
          const error: any = new Error(response.statusText);
          setError(error);
        }
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };
    sendRequest();
  }, [url, options, type, payload, cache]);

  return { loading, data, error, doCall };
};

export default useFetch;
