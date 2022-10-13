import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { useAppDispatch } from './useRedux';
import { fulfilled } from '../redux/project/slice';
import { db } from '../firebase/config';
import { ProjectEntity } from '../types';

export default function useLoadEffect() {
  const dispatch = useAppDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const ref = collection(db, `${process.env.REACT_APP_PROJECCT_REF}`);

      const snapshot = await getDocs(ref);

      const prepared = snapshot.docs.map(
        (doc) => doc.data() as ProjectEntity,
        []
      );

      dispatch(fulfilled(prepared));

      if (prepared.length > 0) {
        setIsLoaded(true);
      }
    })();
  }, [dispatch]);

  return {
    isLoaded,
  };
}
