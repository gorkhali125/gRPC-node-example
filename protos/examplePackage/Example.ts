// Original file: protos/example.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumberRequest as _examplePackage_NumberRequest, NumberRequest__Output as _examplePackage_NumberRequest__Output } from '../examplePackage/NumberRequest';
import type { NumberResponse as _examplePackage_NumberResponse, NumberResponse__Output as _examplePackage_NumberResponse__Output } from '../examplePackage/NumberResponse';
import type { PingRequest as _examplePackage_PingRequest, PingRequest__Output as _examplePackage_PingRequest__Output } from '../examplePackage/PingRequest';
import type { PingResponse as _examplePackage_PingResponse, PingResponse__Output as _examplePackage_PingResponse__Output } from '../examplePackage/PingResponse';
import type { TodoRequest as _examplePackage_TodoRequest, TodoRequest__Output as _examplePackage_TodoRequest__Output } from '../examplePackage/TodoRequest';
import type { TodoResponse as _examplePackage_TodoResponse, TodoResponse__Output as _examplePackage_TodoResponse__Output } from '../examplePackage/TodoResponse';

export interface ExampleClient extends grpc.Client {
  PingPong(argument: _examplePackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _examplePackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _examplePackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _examplePackage_PingRequest, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _examplePackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _examplePackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _examplePackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _examplePackage_PingRequest, callback: grpc.requestCallback<_examplePackage_PingResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumbers(argument: _examplePackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_examplePackage_NumberResponse__Output>;
  RandomNumbers(argument: _examplePackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_examplePackage_NumberResponse__Output>;
  randomNumbers(argument: _examplePackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_examplePackage_NumberResponse__Output>;
  randomNumbers(argument: _examplePackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_examplePackage_NumberResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  todoList(callback: grpc.requestCallback<_examplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_examplePackage_TodoRequest>;
  
}

export interface ExampleHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_examplePackage_PingRequest__Output, _examplePackage_PingResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_examplePackage_NumberRequest__Output, _examplePackage_NumberResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_examplePackage_TodoRequest__Output, _examplePackage_TodoResponse>;
  
}

export interface ExampleDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_examplePackage_PingRequest, _examplePackage_PingResponse, _examplePackage_PingRequest__Output, _examplePackage_PingResponse__Output>
  RandomNumbers: MethodDefinition<_examplePackage_NumberRequest, _examplePackage_NumberResponse, _examplePackage_NumberRequest__Output, _examplePackage_NumberResponse__Output>
  TodoList: MethodDefinition<_examplePackage_TodoRequest, _examplePackage_TodoResponse, _examplePackage_TodoRequest__Output, _examplePackage_TodoResponse__Output>
}
