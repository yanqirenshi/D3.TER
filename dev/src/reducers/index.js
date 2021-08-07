import { combineReducers } from 'redux';

import sogh from './sogh.js';
import repository from './repository.js';

export default combineReducers({
    sogh,
    repository,
});
