/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';

import { Spinner } from 'components';

export default Loadable({
  loader: () => import('./index'),
  loading: Spinner,
});
