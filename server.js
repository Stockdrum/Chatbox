const express = require("express")
const path = require("path")
const http = require("http")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

// Create a static folder for uses

// app.set("path", path.join(__dirname, "public"))

// OR //
app.use(express.static(path.join(__dirname, "public")))

// Run when the client connects to app
io.on("connection", (socket) => {
	console.log("New Connection to client ....")
})
const PORT = 3000 || process.env.PORT

server.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})
