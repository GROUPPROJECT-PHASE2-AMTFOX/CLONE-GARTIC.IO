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
let messages = []

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
                jawaban: '',
                rounds: 0
            }
            rooms.push(room)
            console.log(rooms)
            // rooms=[]
            io.emit('updated-rooms', rooms)
        })
    socket.on('join-room', (data) => {
        // console.log(`dalam server`,data)
        socket.join(data.roomName, function () {
            let roomIndex = rooms.findIndex((i) => i.name == data.roomName)
            console.log(roomIndex, 'dari dalam server')
            rooms[roomIndex].users.push({
                name: data.userName,
                points: 0
            })
            io.sockets.in(data.roomName).emit('room-detail', rooms[roomIndex])
        })
    })
    socket.on('start-game', (data) => {
        let roomIndex = rooms.findIndex((i) => i.name == data)
        let jumlahBinatang = animalList.length - 1
        let randomNumber = Math.ceil(Math.random() * jumlahBinatang)
        let jawaban = animalList[randomNumber]
        rooms[roomIndex].jawaban = jawaban;
        console.log(rooms[roomIndex],`dari start game`)
        console.log(`jawabannya adalah`, jawaban)
        socket.join(data, function () {
            io.sockets.in(data).emit('room-detail', rooms[roomIndex])
        })

    })
    socket.on('next-question', (data) => {
        // console.log(data)
        let roomIndex = rooms.findIndex((i) => i.name == data.dataRoom.name)
        // console.log(roomIndex)
        let totalPlayer = rooms[roomIndex].users.length
        if (rooms[roomIndex].index < totalPlayer - 1) {
            rooms[roomIndex].index = rooms[roomIndex].index + 1
        }
        else {
            rooms[roomIndex].index = 0;
        }
        rooms[roomIndex].rounds += 1
        let jumlahBinatang = animalList.length - 1
        let randomNumber = Math.ceil(Math.random() * jumlahBinatang)
        let jawaban = animalList[randomNumber]
        rooms[roomIndex].jawaban = jawaban;
        socket.join(data.dataRoom.name, function () {
            io.sockets.in(data.dataRoom.name).emit('room-detail', rooms[roomIndex])
            io.sockets.in(data.dataRoom.name).emit('clear-canvas')
        })


    })
    socket.on('canvas-line', (data) => {
        let roomIndex = rooms.findIndex((i) => i.name == data.roomName)

        socket.join(data.roomName, function () {
            io.sockets.in(data.roomName).emit('canvas-stroke', data)
            console.log(data, 'line 90')

        })
    })

    socket.on('tebakan-server', (data) => {
        let roomIndex = rooms.findIndex((i) => i.name == data.roomName)
        let usernameIndex = rooms[roomIndex].users.findIndex((j) => j.name == data.username)
        console.log(roomIndex, usernameIndex)
        console.log(data)
        if (rooms[roomIndex].jawaban === data.tebakan) {
            rooms[roomIndex].users[usernameIndex].points += 10
        }

        socket.join(data.roomName), function () {
            io.sockets.in(data.roomName).emit('room-detail', rooms[roomIndex])
        }
        // console.log(rooms)
        // console.log(rooms[roomIndex].users)
    })
    socket.on('message-room',(data)=>{
        let roomIndex = rooms.findIndex((i) => i.name == data.roomName)
        messages.push(data)
        console.log(data,`message room`)
        socket.join(data.roomName),function(){
            io.sockets.in(data.roomName).emit('room-message',data)
        }
    })


});


server.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))