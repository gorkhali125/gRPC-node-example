import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from "./protos/example"
import { ExampleHandlers } from './protos/examplePackage/Example'
import { TodoResponse } from './protos/examplePackage/TodoResponse'
import { TodoRequest } from './protos/examplePackage/TodoRequest'

const PORT = 8082
const PROTO_FILE = './protos/example.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const examplePackage = grpcObj.examplePackage

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

const todoList: TodoResponse = {todos: []}
function getGrpcServer() {
    const server = new grpc.Server()
    server.addService(examplePackage.Example.service, {
        // Unary Call. Client sends "Ping" and Server responses with "Pong"
        // Check the file client.ts for more details on how client calls this method.
        PingPong: (req, res) => {
            console.log(req.request)
            res(null, {message: "Pong"})
        },
        // Server Streaming Call. Client sends a number "maxVal" and Server keeps streaming responses with some values a certain number of times.
        // Check the file client.ts for more details on how client calls this method with the number.
        RandomNumbers: (call) => {
            const { maxVal = 10 } = call.request
            console.log(maxVal)

            let runCount = 0
            const intervalId = setInterval(() => {
                runCount == ++runCount
                call.write({num: Math.floor(Math.random() * maxVal)})
                if (runCount >= 10) {
                    clearInterval(intervalId)
                    call.end()
                }
            }, 500)
        },
        // Client Streaming Call. Client keeps on adding todolists for a certain number of times while server waits for all these request to finish.
        // Once the client has finished sending all the values, server will process those.
        // Check the file client.ts for more details on how client calls this method with streaming data.
        TodoList: (call, callback) => {
            call.on("data", (chunk: TodoRequest) => {
                console.log(chunk)
                todoList.todos?.push(chunk)
            })

            call.on("end", () => {
                callback(null, {todos: todoList.todos})
            })
        }
    } as ExampleHandlers)

    return server
}
