import { SayHelloResponse } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: (): SayHelloResponse => ({
      ok: true,
      greeting: 'Hello 👋!',
    }),
  },
};

export default resolvers;
