const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'jacobkleuber@gmail.com',
        pass: 'Kleuberjacob201317!'
    },
    tls: {
        rejectUnauthorized: false
    }    
})

async function send() {
    try {
        const mailSent = await transporter.sendMail({
            from: 'Kleuber Jacob <jacobkleuber@gmail.com>',
            to: 'kleuber.18@hotmail.com',
            subject: 'Teste de envio de email com NodeJS',
            text: 'Teste de envio de email com NodeJS utilizando a biblioteca Nodemailer',
            html: 'Ola para maiores informacoes acesse o site: <a href="https://globo.com">Site</a>'
        })
    
        console.log(mailSent)
    
    } catch (error) {
        console.log(error)
    }
    
}
send()

