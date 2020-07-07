const express = require('express');

const server = express();

const shortid = require('shortid')
server.use(express.json());

let users = [];
const PORT = 5000;

server.get('/', (req, res) => {
    res.send("hello")
})
//create
server.post('/api/users', (req, res) => {
    const userInfo = req.body;

    
    userInfo.id = shortid.generate()
    users.push(userInfo);
    res.status(201).json(userInfo)
  
})

    

    

//Read
server.get('/api/users', (req, res) => {
    res.status(201).json(users)
})

//Delete
server.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const found = users.find(user => user.id === id)
    if(found) {
        users = users.filter(user => user.id !== id)
        res.status(200).json({ message: 'found'})
    } else{
        res.status(404).json({message: 'users not found'})
    }
    

})
server.listen(PORT, () => {
    console.log('Server is Up')
})