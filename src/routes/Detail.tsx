import { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { NavigationBar, ProjectDetail } from '../components';
import { useAppSelector } from '../hooks/useRedux';
import { DetailEntity } from '../type';
import DetailData from '../utils/details';

function Detail() {
  const state = useAppSelector((state) => state.route);

  const [data, setData] = useState<DetailEntity | null>(null);

  useEffect(() => {
    const [entity] = DetailData.filter(
      (item) => item.route === state.routeName
    );

    setData(entity);
  }, [state.routeName]);

  return (
    <>
      <Helmet title="Detail" />

      <NavigationBar />

      <ProjectDetail data={data} />
    </>
  );
}

export default memo(Detail);
