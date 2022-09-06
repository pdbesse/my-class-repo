import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

// To send requests, we first have to set up Apollo Client in our App.js file and create a new ApolloClient instance that identifies the URL of our GraphQL server. 
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
