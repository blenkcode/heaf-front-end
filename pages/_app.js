import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import React from "react"; // Ajoutez cette ligne

const store = configureStore({
  reducer: { user },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <React.StrictMode>
        {" "}
        <Head>
          <title>Heaf</title>
        </Head>
        <Component {...pageProps} />
      </React.StrictMode>
    </Provider>
  );
}

export default App;
