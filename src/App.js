import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList'
import User from './components/User';
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
  constructor(props){
    super(props);
    this.state = {
      activeRoom: null,
      user:null,

    }
  }

  setActiveRoom(room) {

    this.setState({activeRoom: room})
  }
  setUser(user) {

    this.setState({user:user})
  }

  render(){
    return(
      <div>
      <RoomList firebase= { firebase } setActiveRoom={this.setActiveRoom.bind(this)} activeRoom={this.state.activeRoom}  />
      <MessageList firebase= { firebase } activeRoom={this.state.activeRoom} user={this.state.user} />
      <User firebase= { firebase }  setUser={this.setUser.bind(this)} user={this.state.user}/>
      </div>
    )
  }
}

export default App;
