const express = require('express')
const router = express.Router()

let friend = [
    {id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'}

]


router.get('/contacts/:id',(req,res)=>{

    let id = req.params.id
    if(id != null){
        for (let i=1; i<=friend.length; i++) {
            if(friend[i].id == id){
                res.json(friend[i])
                break
            }
        }
    }
})

router.put('/contacts/:id', (req, res) => {
    let id = req.params.id
    for(var i=0;i<friend.length;i++)
    {
        if(friend[i].id == id){
            if(friend[i].name != null){
                friend[i].name = req.body.name
            }
            if(friend[i].email != null){
                friend[i].email = req.body.email
            }
            if(friend[i].phone != null){
                friend[i].phone = req.body.phone
            }
            if(friend[i].url != null){
                friend[i].url = req.body.url
            }
            if(friend[i].notes != null){
                friend[i].notes = req.body.notes
            }
            break
        }
    }
})


router.delete('/contacts/:id', (req, res)=> {
    let id = req.params.id
    for(var i=0;i<friend.length;i++)
    {
        if(friend[i].id == id){
            friend.splice(i, 1)
            break
        }
    }
})

router.post('/contacts', (req, res) => {
    let newfriend = req.body
    if(friend.length){
        newfriend.id = friend.length
        friend.push(newfriend)
    }
    res.json(newfriend)
})

router.get('/contacts',(req,res)=>{
    var name = req.query.name
    if(name != null){
        for (let i=0; i<friend.length; i++) {
            if(friend[i].name == name){
              res.json(friend[i])
              break
            }
        }
        res.json("Not Found") 
       
    }
    else{
        res.json(friend)
    }     
})
module.exports = router