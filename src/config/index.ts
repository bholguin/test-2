import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const useConfig = () => {
  const [client] = useState<ApolloClient<NormalizedCacheObject>>(
    new ApolloClient({
      uri: process.env.REACT_APP_API,
      cache: new InMemoryCache(),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
      credentials: "omit",
    })
  );

  return {
    client,
  };
};

export default useConfig;
