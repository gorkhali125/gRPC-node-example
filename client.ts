import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from "./protos/example"

const PORT = 8082
const PROTO_FILE = './protos/example.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.examplePackage.Example(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err)
        return
    }
    onClientReady()
})

function onClientReady() {
    // Unary Call. Client sends "Ping" and Server responses with "Pong"
    // Check the file server.ts for more details on how server returns the response to this method.
    client.PingPong({message: "Ping"}, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(result)
    })
    // Server Streaming Call. Client sends a number "maxVal = 50" and Server keeps streaming responses with some values a certain number of times.
    // Check the file server.ts for more details on how server responds to this method with the stream of numbers.
    const stream = client.RandomNumbers({maxVal: 50})
    stream.on("data", (chunk) => {
        console.log(chunk)
    })
    stream.on("end", () => {
        console.log("Server Streaming Communication End");
    })
    // Client Streaming Call. Client keeps on adding todolists for a certain number of times which is shown below while server waits for all these request to finish.
    // Once the client has finished sending all the values, server will process those and returns the response to client with all todoList.
    // Check the file server.ts for more details on how server sends the response to the client with all todoList.
    const clientStream = client.todoList((err, result) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(result)
    })
    clientStream.write({todo: "Do an awesome job today", status: "In Progress"})
    clientStream.write({todo: "Learn to code gRPC in typescript", status: "Todo"})
    clientStream.write({todo: "Follow my github page", status: "Done"})
    clientStream.write({todo: "Check out my other repositories", status: "Ready to pick"})
    clientStream.end()
}