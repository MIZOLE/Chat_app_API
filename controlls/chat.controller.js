const addMessage = require("../model/chats") 


exports.addMessage = (req,res)=>{
    const { from , to, message} = req.body
    const newmessage = new addMessage({
        text:message,
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

exports.getAllMessage = async (req, res)=>{


    addMessage.find()
    .then(data=>{
        res.send(data)
        console.log(data)

    })
    .catch(error=>{
        res.status(500).send("Could not find book",error)
        console.log("Could not find book,error")
    })

 }

exports.deleteOne = (req, res)=>{
    
    const id = req.params.id
    addMessage.findByIdAndRemove(id, {useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({
                msg:`Cannot delete Book with id=${id}.Maybe it was not exit`
               
            })
        }else res.status(201).send({msg:"Book was deleted successfully."})
    })
    .catch(err=>{
        res.status(500).send({msg: `Error deleting Book with id=${id},Error: ${err}`})
    })

}