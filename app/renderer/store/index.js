// @flow
import { remote } from 'electron';

import dev from './configureStore.development';
import prod from './configureStore.production';

let store;
if (remote.getGlobal("sharedObj").__DEV__) {
    console.log('test');
    store = dev; // eslint-disable-line global-require
} else {
    store = prod; // eslint-disable-line global-require
}
export default store;