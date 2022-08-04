import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/theekrystallee/web3rsvpgraph",
  cache: new InMemoryCache(),
});

export default client;
