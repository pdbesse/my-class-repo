import React from 'react';
// To set up our React.js front end to be able to send requests, we need to use one more tool.

// 🔑 Apollo Client is a library that allows us to handle data using the GraphQL on the front end.
// 🔑 We first install @apollo/client and import the component and classes we need for setup:
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

// 🔑 Next, we create a new instance of the imported ApolloClient class to 
// implement the core client-side API and provide the uri of our GraphQL API so we can send requests. 
//We also create a new instance of InMemoryCache to enable caching
//uri specifies the URL of our GraphQL server.
//cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

//🔑 To access the ApolloClient instance from anywhere in your component tree, we use the ApolloProvider component to wrap our React.js app:
// Apollo Client is set up and we are ready to write a query and start sending requests.
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;

// ☝️ What is Apollo Client?

// 🙋 Apollo Client is a powerful library allows us to request data from our API and handles the whole request cycle.

// ☝️ What can we do with Apollo Client?

// 🙋 Using Apollo Client, we can easily execute a query and use the returned data to populate our page in a few lines of code.

