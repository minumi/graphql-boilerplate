import { SayGoodbyeResponse } from "../../../types/graph";

const resolvers = {
  Query: {
    sayGoodbye: (): SayGoodbyeResponse => ({
      ok: true,
      greeting: 'Good bye!',
    }),
  },
};

export default resolvers;
