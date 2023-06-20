import * as grpc from '@grpc/grpc-js'

const PORT = 8082


// Get gRPC server and bind it to a host/port
const server = getGrpcServer()
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`Server started on port ${port}`)
    server.start()
})

function getGrpcServer() {
    const server = new grpc.Server()
    return server
}
