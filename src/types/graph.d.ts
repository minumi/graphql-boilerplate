export const typeDefs = ["type SayGoodbyeResponse {\n  ok: Boolean!\n  greeting: String!\n}\n\ntype Query {\n  SayGoodbye: SayGoodbyeResponse!\n  sayHello: SayHelloResponse!\n}\n\ntype SayHelloResponse {\n  ok: Boolean!\n  greeting: String!\n}\n\ntype User {\n  id: ID!\n  email: String\n  verifiedEmail: Boolean!\n  password: String\n  createAt: String!\n  updateAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  SayGoodbye: SayGoodbyeResponse;
  sayHello: SayHelloResponse;
}

export interface SayGoodbyeResponse {
  ok: boolean;
  greeting: string;
}

export interface SayHelloResponse {
  ok: boolean;
  greeting: string;
}

export interface User {
  id: string;
  email: string | null;
  verifiedEmail: boolean;
  password: string | null;
  createAt: string;
  updateAt: string | null;
}
