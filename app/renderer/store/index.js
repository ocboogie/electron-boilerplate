import dev from './configureStore.development';
import prod from './configureStore.production';

if (process.env.NODE_ENV === 'development') {
  module.exports = dev;
} else {
  module.exports = prod;
}
