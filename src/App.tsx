import useComponents from './components';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FC } from 'react';
import { ApolloProvider } from "@apollo/client";
import { Provider } from 'react-redux';

import useConfig from './config';
import useStoreConfig from "./redux";
const App: FC = (): JSX.Element => {

  const { client } = useConfig()
  const { Actors, Detail } = useComponents()
  const {store, persistor} = useStoreConfig()

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Actors />}>
                  <Route path=':id' element={<Detail />}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </ApolloProvider>
        </PersistGate>
      </Provider>
  );
}

export default App;
