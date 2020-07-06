'use strict';
var config = require('../config');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendgridKey);

exports.send = async (to, subject, body) => {
console.log("Enviando email para: ->", to)
    
    const msg = {
        to: to,
        from: 'ramonconrado94@gmail.com',
        subject: subject,
        text: 'Node.js',
        html: body,
      };
      sgMail.send(msg).then(() => {
        console.log('Email enviado com sucesso')
    }).catch((error) => {
        console.log(error.response.body)
    })
}