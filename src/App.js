import './App.css';
import {Paginate} from './components/paginate';
import {TickTacToe} from './components/tick-tack-toe';
import {ToDo} from './components/toDo';
import {Parent} from './components/data-share/parent'
import { PreviousState } from './components/previousState';
import { RenderCounter} from './components/renderCounter'
import { Counter  } from './components/counter';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

const UserListLazy = lazy(() => import('./components/user/userList'));

const App = () => (
  <AuthProvider>
  <Router>
    <nav>
    <NavLink to="/paginate"> Paginate </NavLink>
    <NavLink to="/tick"> TickTacToe </NavLink>
    <NavLink to="/todo"> ToDo </NavLink>
    <NavLink to="/user"> user </NavLink>
    <NavLink to="/previousState"> get previous state  </NavLink>
    <NavLink to="/parentChild"> parent child data share  </NavLink>
    <NavLink to="/counter">Counter</ NavLink>
    <NavLink to="/renderCounter">Render Counter</NavLink>
    </nav>
    <Routes>
    <Route element={<Paginate/>} path="/paginate"></Route>
        <Route element={<TickTacToe/>} path="/tick"></Route>
        <Route element={<ToDo/>} path="/todo"></Route>
        <Route element ={<PreviousState/>} path="/previousState"></Route>
        <Route element={<Parent/>} path="/parentChild"></Route>
        <Route element={<Counter/> }path="/counter"></Route>
        <Route element={<RenderCounter/>} path="/renderCounter"></Route>
    </Routes>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/user" element={<UserListLazy />} />
      </Routes>
    </Suspense>
  </Router>
  </AuthProvider>
);

export default App;

