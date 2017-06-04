import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// import schema from './graphql/schema';

import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';

const PORT = 3000;
const app = express();

app.use('*', cors());

app.post('/graphql', bodyParser.json(), graphqlExpress({
  // schema,
}));

app.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
