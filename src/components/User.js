import React, { Component } from 'react';
class User extends Component{

signIn(){
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );}

signOut(){
  this.props.firebase.auth().signOut();

}
componentDidMount(){
  this.props.firebase.auth().onAuthStateChanged( user => {
  this.props.setUser(user);

});}


display(){
  if(this.props.user !== null ){return this.props.user.displayName} else{return "Guest"}
}
buttonClick(e){
  if (this.props.user === null){
   this.signIn()} else{
   this.signOut()}
}

  render(){
    return(
    <section>
    <input type ="button" value={(this.props.user === null)? "Sign In":"SignOut"}onClick={(e)=>this.buttonClick(e)}/>
    <div>{this.display()}</div>

    </section>)
  }
}
export default User
