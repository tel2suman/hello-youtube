import React from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <Body/>,
  children: [
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watchpage",
      element: <WatchPage/>
    }
  ]
}
])

function App() {

  return (
    <Provider store={store}>
        <Head/>
        <RouterProvider router={appRouter}/>
      </Provider>
  );
}

export default App;
