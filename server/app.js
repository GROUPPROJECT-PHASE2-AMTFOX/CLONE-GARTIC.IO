const express = require('express')
const app = express()
const server = require('http').createServer();
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())

let users = []

io.on('connection', socket => { 
    socket.on('user-login', (username) => {
        console.log('login server', username)
        users.push(username)
        io.emit('user-data', users)
    })

 });


server.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))