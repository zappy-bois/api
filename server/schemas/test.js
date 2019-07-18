import {buildSchema} from 'graphql';

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
  message: () => 'hello world',
};

export default {
  endpoint: '/test',
  schema,
  root,
  graphiql: true,
};
