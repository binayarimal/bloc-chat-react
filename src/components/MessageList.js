  import React, { Component } from 'react';

  class MessageList extends Component {
    constructor(props){
      super(props);
      this.state={
        MessageList:[],

      }
      this.MessagesRef = this.props.firebase.database().ref('Messages');
    }
    componentDidMount() {
      this.MessagesRef.on('child_added', snapshot => {

        const message = snapshot.val();
        message.key = snapshot.key;

        this.setState({ MessageList: this.state.MessageList.concat( message ) });

      });

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
        Message:  {message.content}

          </div>
        )}
        </div>

        </section>
      )
      }
    }
  }
  export default MessageList;
