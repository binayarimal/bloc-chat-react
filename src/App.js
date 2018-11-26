import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
 import RoomList from './components/RoomList';
var config = {
   apiKey: "AIzaSyDNuRFBen5kBfCMVTZWJQn4pRPSIe-kLGw",
   authDomain: "bloc-chat-439ec.firebaseapp.com",
   databaseURL: "https://bloc-chat-439ec.firebaseio.com",
   projectId: "bloc-chat-439ec",
   storageBucket: "bloc-chat-439ec.appspot.com",
   messagingSenderId: "322554472388"
 };
 firebase.initializeApp(config);

class App extends Component {


  render(){
    return(
      <div>
    <RoomList firebase= { firebase }  />
    </div>
    )
  }
}

export default App;
