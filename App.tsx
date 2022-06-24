import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HomeStack from './components/routes/defaultNavigation';




export default function App() {
  
  return (
     <Provider store={store}>
      <HomeStack/>
     </Provider>
  );
}

