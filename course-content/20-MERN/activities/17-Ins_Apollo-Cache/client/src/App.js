import React from 'react';
// 🔑 Apollo Client has an in-memory cache that stores the data from completed requests. 
// To use Apollo's in-memory cache, we first import InMemoryCache in our App.js file:
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

// We then set the cache value in our client to a new instance of a InMemoryCache() object.
// We will reference this cache object when we want to retrieve data or update the data stored in the cache:
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

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
