const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema')
const app = express();

app.use('/graphql', expressGraphQL({ // Over here its "/graphql" and not "./graphql"
    schema:schema,
    graphiql:true // make sure that this is "graphiql" rather than "graphql"
}))
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
