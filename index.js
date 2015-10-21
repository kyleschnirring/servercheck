var nodemailer = require('nodemailer');
var http = require('http');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass: ''
    }
});

var mailOptions = {
    from: 'Server', // sender address
    to: '@vtext.com', // list of receivers
    subject: 'Websites', // Subject line
    text: 'Websites still up', // plaintext body
    html: '<br>Websites still up</br>' // html body
};

http.get("http://donttattleonme.com/index.html", function (res) {
  console.log("Got response: " + res.statusCode);
    if (res.statusCode === 200) {
      transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            return console.log(error);
          }
            console.log('Message sent: ' + info.response);
        });
    }
}).on('error', function (e) {
    console.log("Got error: " + e.message);
});

