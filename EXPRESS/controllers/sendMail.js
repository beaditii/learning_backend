const nodemailer=require('nodemailer');
const sendMail=async(req,res)=>{
  try{
    let testAccount = await nodemailer.createTestAccount();
    let transporter = await nodemailer.createTransport({

         //secure: false, // true for 465, false for other ports
         host: 'smtp.ethereal.email',
         port: 587,
         auth: {
             user:'marge.gutkowski98@ethereal.email',
             pass: '5PB6MmJ8mGc422vCRc'
     },
     
    });

        // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Aditi Kuamri 👻" <aditi@example.com>', // sender address
    to: "shivam@example.com",
    // list of receivers
    subject: "Hello Shivam", // Subject line
    text: "Hello Dear?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou
    res.json(info);}

  // res.send('i am nodemailer');
catch (error) {
    console.error(error);
  }
};



module.exports=sendMail; 