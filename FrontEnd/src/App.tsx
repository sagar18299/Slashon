// App.tsx
import React from 'react';
import  {Provider}  from 'react-redux';
import store  from './store/store';
import   {RouterProvider} from 'react-router-dom';
import router from './router/router';
import { Toaster } from 'react-hot-toast';





const App: React.FC = () => {
  return (
    <Provider store={store}>
  
      <div className="App">

     
      <Toaster />
        <RouterProvider router={router} />
      </div>
  
     </Provider>
  );
};

export default App;
