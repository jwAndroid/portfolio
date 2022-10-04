import { memo } from 'react';

import { Footer, NavigationBar } from '../components';

function Project() {
  return (
    <div>
      <NavigationBar />

      <Footer />
    </div>
  );
}

export default memo(Project);
