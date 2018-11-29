import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props){
    super(props);
    this.state={
      rooms:[],
      value:"",


    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }


  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {

      const room = snapshot.val();
      room.key = snapshot.key;

      this.setState({ rooms: this.state.rooms.concat( room ) });


    });

  }

  createRoom(e){
    e.preventDefault();
    this.roomsRef.push({name:this.state.value})
  }

  render(){
    return(
      <section>
      <h1>Bloc Chat</h1>
      <form
      className ="newRoom"
      onSubmit= {(e)=>this.createRoom(e)}>

      <input
      className="textArea"
      type="textArea"
      value={this.state.value}
      onChange = {(e)=>this.setState({value:e.target.value})} />

      <input type="submit"/>

      </form>



      <div className="rooms">
      {
        this.state.rooms.map((room,index) =>
        <div key={index} onClick={()=> this.props.setActiveRoom(room)} >
        {room.name}
        </div>
      )}
      </div>


      </section>
    )
  }
}
export default RoomList;
