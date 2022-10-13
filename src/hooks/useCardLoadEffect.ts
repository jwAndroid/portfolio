import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { useAppDispatch } from './useRedux';
import { db } from '../firebase/config';
import { CardEntity } from '../redux/card/type';
import { fulfilledCard } from '../redux/card/slice';

export default function useCardLoadEffect() {
  const dispatch = useAppDispatch();

  const [isCardLoaded, setIsCardLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const ref = collection(db, `${process.env.REACT_APP_CARD_REF}`);

      const snapshot = await getDocs(ref);

      const prepared = snapshot.docs.map((doc) => doc.data() as CardEntity, []);

      dispatch(fulfilledCard(prepared));

      if (prepared.length > 0) {
        setIsCardLoaded(true);
      }
    })();
  }, [dispatch]);

  return {
    isCardLoaded,
  };
}
