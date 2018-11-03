const mailer = require('nodemailer');
const { welcome } = require("./welcome_template");
require('dotenv').config();

const getEmailData = (to,name,token,template) => {
    let data = null;
    let doc = {
        name: name
    }

    switch(template) {
        case 'welcome':
            data = {
                from: "Y4T6 <y4t6official@gmail.com>",
                to,
                subject:`Welcome to waves, ${name}`,
                html: welcome(doc)
            }
        break;
        default:
            data;
    }

    return data;
}
const sendEmail = (to,name,token,type) => {

    const smtpTransport = mailer.createTransport({
        service:"Gmail",
        auth:{
            user: "y4t6official@gmail.com",
            pass: process.env.GMAIL_PASS
        }
    });

    const mail = getEmailData(to,name,token,type);

    smtpTransport.sendMail(mail,function(err,response){
        if(err) return res.json({'success':false,err});
        smtpTransport.close();
    });

}

module.exports = { sendEmail }
