import useComponents from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FC } from 'react';
import { ApolloProvider } from "@apollo/client";
import useConfig from './config';
const App: FC = (): JSX.Element => {

  const { client } = useConfig()
  const { Actors, Detail } = useComponents()

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Actors />}>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>

  );
}

export default App;
