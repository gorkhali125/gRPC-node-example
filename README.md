# gRPC Example in Node/Typescript
gRPC is a modern open source high performance (Google) Remote Procedure Call (RPC) framework that can run in any environment. gRPC uses `profobuf` which is **Protocol Buffers** as a data format used to serialize structured data.

This repository is an example of gRPC server and client written with node and typescript. This example covers only the following streaming methods available in gRPC:
1. Unary RPC Call
2. Server Streaming RPC Call
3. Client Streaming RPC Call
4. Bidirectional Streaming RPC Call [ Not Covered in this example ]


## Usage

Clone the repository locally. Navigate to the directory and run the following command to install all required dependencies. Please note that you need to have `yarn` installed in your system.

```
yarn install
```

and afterwards, to run the server

```
yarn server
```

and to run the client

```
yarn client
```

If you wish to make changes to the proto files, these are located inside the `protos` directory. After making changes to the proto files, a generator needs to be run inorder to generate all the ts code required.

The generator is already available as a bash script `proto-generator.sh` in the root directory and you can use the command below to run the generator script.

```
yarn proto:generate
```

If you wish to play around with only one RPC call at a time, you can comment out other RPC calls in the file *client.ts* and run the client.

## Built With
  * NodeJs
  * Typescript
  * gRPC Js
  * gRPC Proto Loader





