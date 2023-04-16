import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '../utilities/environmental.js';


sgMail.setApiKey(SENDGRID_API_KEY);

export const sendEmailForgetPassword = async (email, link) => {
  console.log('send email', email, link);

  const msg = {
    to: email,
    from: 'noreply@wagtrail.dev.yliang.net',
    subject: 'Reset Your wagtrail Password',
    text: `Forget Your Password? If you requested a password reset for ${email}, click this link - ${link} - and follow the instructions to reset your password. If you did not make this request, ignore this email.`,
    html: `<span>Forget Your Password? If you requested a password reset for ${email}, click the button below and follow the instructions to reset your password. If you did not make this request, ignore this email.</span><a href=${link}>reset password</a>`,
  };


  const res = await sgMail.send(msg); // console.log('res', res[0].statusCode);
  return res[0].statusCode;


  // catching error in middleware
  // try {
  //   const res = await sgMail.send(msg); // console.log('res', res[0].statusCode);
  //   return res[0].statusCode;
  // } catch (error) {
  //   console.error(error);
  // }

  // sgMail
  //     .send(msg)
  //     .then(() => {
  //         console.log('email sent');
  //     })
  //     .catch((error) => {
  //         console.error(error);
  //     });
};






// library https://github.com/sendgrid/sendgrid-nodejs
// check activity https://app.sendgrid.com/email_activity

/* const res = await sgMail.send(msg);
res [
    Response {
      statusCode: 202,
      body: '',
      headers: {
        server: 'nginx',
        date: 'Mon, 14 Mar 2022 21:00:46 GMT',
        'content-length': '0',
        connection: 'close',
        'x-message-id': 'IkYn5iGRR_eeFriSpFelIg',
        'access-control-allow-origin': 'https://sendgrid.api-docs.io',
        'access-control-allow-methods': 'POST',
        'access-control-allow-headers': 'Authorization, content-type, On-behalf-of, x-sg-elas-acl',
        'access-control-max-age': '600',
        'x-no-cors-reason': 'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
        'strict-transport-security': 'max-age=600; includeSubDomains'
      }
    },
    ''
  ]
*/