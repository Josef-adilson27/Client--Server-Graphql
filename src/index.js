import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from 'react';
import {ApolloClient,InMemoryCache, ApolloProvider,} from "@apollo/client";

import {  gql, useMutation } from "@apollo/client";
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});


export const myContext = createContext('');





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode> 
    <ApolloProvider client={client}>
      <myContext.Provider value={
       
       ''
      }>
       <App />
      </myContext.Provider>
    </ApolloProvider> 
  </React.StrictMode>
);
