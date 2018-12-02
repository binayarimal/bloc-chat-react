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


  render(){
    return(
    <section>
    <input type ="button" value ="Sign In"onClick={()=>this.signIn()}/>
    <input type ="button" value = "Sign Out"onClick={()=>this.signOut()}/>
    <div>{this.display()}</div>

    </section>)
  }
}
export default User
