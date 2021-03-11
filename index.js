const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'emailutilizado@teste.com',
        pass: 'digitesuasenha'
    },
    tls: {
        rejectUnauthorized: false
    }    
})

async function send() {
    try {
        const mailSent = await transporter.sendMail({
            from: 'Seu Nome <emailutilizado@teste.com>',
            to: 'emaildodestinatario@email.com',
            subject: 'Teste de envio de email com NodeJS',
            text: 'Teste de envio de email com NodeJS utilizando a biblioteca Nodemailer',
            html: 'Ola para maiores informacoes acesse o site: <a href="https://globo.com">Globo</a>'
        })
    
        console.log(mailSent)
    
    } catch (error) {
        console.log(error)
    }
    
}
send()

