import React, { Suspense, useContext } from 'react';
import { Router, Redirect } from '@reach/router';
import "bootswatch/dist/darkly/bootstrap.min.css"; 

import { Context } from './Context';

import NavBar from './components/NavBar'
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const Ingreso = React.lazy(() => import('./pages/Ingreso'));
const Logout = React.lazy(() => import('./pages/Logout'));
const Prueba = React.lazy(() => import('./pages/Prueba'));
// const Producto = React.lazy(() => import('./Producto'));



function App() {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
       { isAuth && <NavBar /> } 
    <Router>
      <Ingreso path="/ingreso" />
      {!isAuth && <Redirect noThrow from="/" to='/ingreso' />}
      <Logout path='/logout' />
      <Home path="/" />
      <Prueba path="/prueba" />
    </Router>
    </Suspense>
  );
}

export default App;
