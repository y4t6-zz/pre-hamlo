import axios from 'axios';
import {
    SEND_CORPORATE_MAIL
} from './types';

import { MAIL_SERVER } from '../components/utils/misc';

export function sendCorporateMail(){

    const request = axios.post(`${MAIL_SERVER}/send_corporate_mail`,{
        subject: 'SUBJECT',
        text: 'TEXT',
        html: '<div><h2>test</h2></div>'
    })
        .then(response => response.data);

    return {
        type: SEND_CORPORATE_MAIL,
        payload: request
    }
}
