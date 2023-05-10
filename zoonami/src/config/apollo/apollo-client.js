import { ApolloClient, InMemoryCache } from '@apollo/client'

const client =  new ApolloClient({
    uri: 'https://zoonami.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'fyQHBKsq8Z8KYDV3H2bMe5CWjrXWhg01EEEbu8yof6Bty98HTQdx0mq8LYPYOJtw'
    }
})

export default client