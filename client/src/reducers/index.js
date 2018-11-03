import { combineReducers } from 'redux';
import user from './user_reducer';
import products from './products_reducer';
import mail from './mail_reducer';

const rootReducer = combineReducers({
    user,
    products,
    mail
});

export default rootReducer;
