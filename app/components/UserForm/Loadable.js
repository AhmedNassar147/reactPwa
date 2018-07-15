/**
 *
 * Asynchronously loads the component for UserForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
