import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ExampleClient as _examplePackage_ExampleClient, ExampleDefinition as _examplePackage_ExampleDefinition } from './examplePackage/Example';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  examplePackage: {
    Example: SubtypeConstructor<typeof grpc.Client, _examplePackage_ExampleClient> & { service: _examplePackage_ExampleDefinition }
    NumberRequest: MessageTypeDefinition
    NumberResponse: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PingResponse: MessageTypeDefinition
    TodoRequest: MessageTypeDefinition
    TodoResponse: MessageTypeDefinition
  }
}

