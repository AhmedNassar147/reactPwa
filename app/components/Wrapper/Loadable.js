/**
 *
 * Asynchronously loads the component for Wrapper
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
