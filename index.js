import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(8080, () => {
    console.log('Server running on localhost:8080')
})