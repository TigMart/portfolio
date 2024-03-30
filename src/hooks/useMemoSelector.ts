import { useRef } from 'react';
import { TypedUseSelectorHook, useSelector as useSelectorGeneric } from 'react-redux';
import isEqual from 'react-fast-compare';

import { IRootState } from '@store/store';

const useSelector: TypedUseSelectorHook<IRootState> = useSelectorGeneric;

type Selector<T> = (state: IRootState) => T;

const useMemoSelector = <T>(selector: Selector<T>, comparator: (a: T, b: T) => boolean = isEqual): T => {
  const resultRef = useRef<T | null>(null);
  const isMemoEqualRef = useRef<boolean>(true);

  const result = useSelector(selector, (prev, next) => {
    const equality = comparator(prev, next);
    isMemoEqualRef.current = equality;
    return equality;
  });

  if (!isMemoEqualRef.current || !comparator(result, resultRef.current as T)) {
    resultRef.current = result;
    isMemoEqualRef.current = true;
  }

  return resultRef.current as T;
};

export default useMemoSelector;
