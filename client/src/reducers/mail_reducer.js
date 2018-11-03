import {
    SEND_CORPORATE_MAIL
} from '../actions/types';

export default function(state={},action){
    switch(action.type){
        case SEND_CORPORATE_MAIL:
            return {...state, corporateMail: action.payload}
        default:
            return state;
    }
}
