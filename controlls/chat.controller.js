const addMessage = require("../model/chats") 


exports.addMessage = (req,res)=>{
    const { from , to, message} = req.body
    const newmessage = new addMessage({
        messages:message,
        users:[from,to],
        sender:from
      });

       newmessage.save()
       res.send({ newmessage });  
}
exports.getMessage = (req,res)=>{
    const messages = addMessage.find()
    .then(data=>{
        res.send(data)
    })
}