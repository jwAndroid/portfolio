import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar, ProjectDetail } from '../components';
// import { useAppSelector } from '../hooks/useRedux';
// import { DetailEntity } from '../type';
// import DetailData from '../utils/details';

function Detail() {
  // const state = useAppSelector((state) => state.route);

  // const [data, setData] = useState<DetailEntity | undefined>();

  // useEffect(() => {
  //   const [entity] = DetailData.filter(
  //     (item) => item.route === state.routeName
  //   );

  //   setData(entity);
  // }, [state.routeName]);

  return (
    <>
      <Helmet title="Detail" />

      <NavigationBar />

      <ProjectDetail />

      <Footer />
    </>
  );
}

export default memo(Detail);
