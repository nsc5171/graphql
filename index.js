import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';


const app = express();

app.get('/', (req, resp) => {
    resp.send('Graphql is amazing!!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true

}))

app.listen(8080, () => console.log('Running on sever port http://localhost:8080/graphql'));