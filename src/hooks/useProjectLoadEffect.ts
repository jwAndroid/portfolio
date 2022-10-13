import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { useAppDispatch } from './useRedux';
import { fulfilledProject } from '../redux/project/slice';
import { db } from '../firebase/config';
import { ProjectEntity } from '../types';

export default function useProjectLoadEffect() {
  const dispatch = useAppDispatch();

  const [isProjectLoaded, setIsProjectLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const ref = collection(db, `${process.env.REACT_APP_PROJECCT_REF}`);

      const snapshot = await getDocs(ref);

      const prepared = snapshot.docs.map(
        (doc) => doc.data() as ProjectEntity,
        []
      );

      dispatch(fulfilledProject(prepared));

      if (prepared.length > 0) {
        setIsProjectLoaded(true);
      }
    })();
  }, [dispatch]);

  return {
    isProjectLoaded,
  };
}
