const { error, info } = require("console");
const NODE_MAILER  = require("nodemailer");

class Mailer { 
    #transport;
    #options;
    constructor(options={}){
        this.#transport = NODE_MAILER.createTransport({
            host: process.env.MAILER_HOST,
            port: process.env.MAILER_POST,
            auth:{
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASS
            },
            debug: true,//Mostrar salida de depuración
            logger: true//registrar información en la consola,
        });
        this.#options=options;
    }
    

    sendMail(){
        this.#transport.sendMail(this.#options,(error,info)=>{
            if(error){
                return console.log(error);
            }
                return console.log('Message sent:%s',info.messageId);
        });
    }
}
module.exports = Mailer;