import { useState, useEffect } from 'react';
import { on } from 'flyd';

export const useStreamState = (s) => {
  const setState = useState(s())[1];
  useEffect(() => {
    on(setState, s);
  }, []);
};
