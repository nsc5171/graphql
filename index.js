import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import {schema} from './schema';


const app = express();

app.get('/', (req, resp) => {
    resp.send('Graphql is amazing!!');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}))

app.listen(8080, () => console.log('Running on sever port http://localhost:8080/graphql'));