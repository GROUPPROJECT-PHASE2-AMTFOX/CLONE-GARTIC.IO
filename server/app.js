const express = require('express')
const app = express()
const server = require('http').createServer();
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000
const cors = require('cors')
const { animalList, itemList } = require('../ListAnimals');


app.use(cors())

let users = []
let rooms = []

io.on('connection', socket => {
    socket.on('user-login', (username) => {
        console.log('login server', username)
        users.push(username)
        io.emit('user-data', users)
        console.log(rooms)
        io.emit('updated-rooms', rooms)
    }),
        socket.on('create-room', (data) => {
            console.log('create room', data)
            let room = {
                name: data.roomName,
                admin: data.admin,
                index: 0,
                users: [],
                jawaban: ''
            }
            rooms.push(room)
            console.log(rooms)
            io.emit('updated-rooms', rooms)
        })
    socket.on('join-room', (data) => {
        // console.log(`dalam server`,data)
        socket.join(data.roomName, function () {
            let roomIndex = rooms.findIndex((i) => i.name == data.roomName)
            console.log(roomIndex,'dari dalam server')
            rooms[roomIndex].users.push({
                name: data.userName,
                points: 0
            })
            io.sockets.in(data.roomName).emit('room-detail', rooms[roomIndex])
        })
    })
    socket.on('start-game', (data) => {
        let roomIndex = rooms.findIndex((i) => i.name == data)
        // console.log(rooms[roomIndex],`dari start-game`)
        let jumlahBinatang = animalList.length - 1
        let randomNumber = Math.ceil(Math.random() * jumlahBinatang)
        let jawaban = animalList[randomNumber]
        rooms[roomIndex].jawaban = jawaban;
        console.log(`jawabannya adalah`, jawaban)
        socket.join(data,function(){
            io.sockets.in(data).emit('room-detail', rooms[roomIndex])
        })

    })
    socket.on('next-question',(data)=>{
        console.log(data)
    })

});


server.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))