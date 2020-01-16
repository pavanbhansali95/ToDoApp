import React, { useContext } from 'react';
import './App.css';
import {AuthContext} from './context/auth.context';
import Login from './core/components/login';
import Header from './core/components/header';
import ToDoDashboard from './toDo/components/toDoDashboard';
function App() {
  const authContext = useContext(AuthContext);
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <div>
   {(authContext.isLogin) ? <ToDoDashboard /> : <Login/>}
   </div>
    </div>
  );
}

export default App;
