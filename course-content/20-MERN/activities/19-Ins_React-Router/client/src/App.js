import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      {/*  🔑 We wrap our Router component around our app elements. This allows us to keep track of the location and easily navigate between pages:*/}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            {/* Define routes to render different page components at different paths */}
            {/* 🔑 To create a static route, we wrap a Route component around the page we want to access and identify the path. Now, when we navigate to http://localhost:3000/, the Home page will display: */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* Define a route that will take in variable data */}
              {/* 🔑 To create a dynamic route, we simply add a parameter :profileId to our path. For the profile page, the URL will change depending on which tech friend's information is being displayed. The profile pages will now be available at http://localhost:3000/profiles/<profileId>:  */}  
              <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
