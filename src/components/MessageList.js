import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state={
      MessageList:[],
      newMessage:"",

    }
    this.MessagesRef = this.props.firebase.database().ref('Messages');
  }
  componentDidMount() {
    this.MessagesRef.on('child_added', snapshot => {

      const message = snapshot.val();
      message.key = snapshot.key;

      this.setState({ MessageList: this.state.MessageList.concat( message ) });
      console.log(message)
    });

  }
  Messenger(){
    if(this.props.user !== null){return this.props.user.displayName}else{return "Guest"}
  }
  createMessage(e){
    e.preventDefault();
    this.MessagesRef.push({
      content:this.state.newMessage,
      roomId:this.props.activeRoom.key,
      username:this.Messenger(),
      sentat:this.props.firebase.database.ServerValue.TIMESTAMP,
    });
    this.setState({newMessage:""})
  }

  render(){
    if (this.props.activeRoom == null) {
      return(
        <div>
        No room selected.
        </div>
      )
    } else {
      return(
        <section>

        <div>
        {this.state.MessageList.filter((message) => message.roomId === this.props.activeRoom.key).map((message,index) =>
          <div key={index} >
          {message.username}:  {message.content}

          </div>
        )}
        </div>
        <form
        className ="newMessage"
        onSubmit= {(e)=>this.createMessage(e)}>

        <input
        className="textArea"
        type="textArea"
        value={this.state.newMessage}
        onChange = {(e)=>this.setState({newMessage:e.target.value})} />

        <input type="submit"
        value="Send"/>
        </form>

        </section>
      )
    }
  }
}
export default MessageList;
