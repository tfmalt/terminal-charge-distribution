import {combineReducers} from 'redux';
import {appmenu} from './appmenu';
import {rates} from './rates';
import {countries} from './countries';
import {distribution} from './distribution';

const rootReducer = combineReducers({
  rates, countries, distribution, appmenu
});

export default rootReducer;
