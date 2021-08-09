import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

  return (    
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='content'>
        <Route render={() => <DialogsContainer />} path='/dialogs'/>
        <Route render={() => <ProfileContainer />} path='/profile/:userId?'/>
        <Route render={() => <UserContainer />} path='/users'/>
      </div>  
    </div>
  );
}

export default App;