import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import SignInPage from "./pages/signInPage"
import InfoPage from "./pages/InfoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import CreatePost from "./pages/CreatePost";
import UpdateForm from "./pages/updatePost";
import SinglePost from "./pages/SinglePost";
import UpdateProfile from "./pages/UpdateProfile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="min-h-screen">
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signIn" element={<SignInPage/>}/>
              <Route path="/me" element={<Profile />} />
              <Route path="/edit-profile" element={<UpdateProfile />} />
              <Route path="/Info" element={<InfoPage />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/update/:id" element={<UpdateForm />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
