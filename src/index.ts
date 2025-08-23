export * from './analyzing';
export * from './formatting';
export * from './transformations';
export * from './validations';

import { analyzing } from './analyzing';
import { formatting } from './formatting';
import { transformations } from './transformations';
import { validations } from './validations';

//importing the extension to ensure String prototype is extended
import './extension';

export default {
  analyzing,
  formatting,
  transformations,
  validations,
};
