import './env';
// tslint:disable-next-line: ordered-imports
import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';

const PORT: number | string = process.env.PORT || 4000;

const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const handleAppStart = () => {
  console.log(`🔥 Server listing on http://localhost:${PORT} 🔥`);
};

createConnection(connectionOptions)
  .then(() => {
    app.start(appOptions, handleAppStart);
  })
  .catch((error) => console.log(error));
