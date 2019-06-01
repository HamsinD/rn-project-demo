import { combineReducers } from 'redux';
import shoot from './shootReducer';

const rootReducer = combineReducers({
    shoot,
});

export default rootReducer;