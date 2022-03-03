import { GraphQLClient } from 'graphql-request'

const URL = 'http://localhost:1337/graphql'

const client = new GraphQLClient(URL)

export default client
