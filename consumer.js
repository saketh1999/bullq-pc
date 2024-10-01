const { Worker } = require("bullmq");
const SendEmail = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>res(),5*1000)
    })
}
const consumed = new Worker('email-queue',async (msg)=>{
    console.log(msg.id)
    console.log("Processing the current msg")
    console.log("Sending the msg to ", msg.data.email)
    await SendEmail();
    console.log("Message sent")
},
{
    connection: {
      host: '127.0.0.1',
      port: 6379,
      password: 'your_redis_password'
    }
}
)

