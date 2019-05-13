import React, { Component } from 'react'
import './Home.css'
import { Link } from "react-router-dom";

export class Home extends Component {
  // constructor(){
  //   super()
  //   this.state ={

  //   }
  // }



  render() {
    return (
      <div className='home'>
        <div className='info-container'>
          <h1 className='title'>Kaylin's Kitchen</h1>
          <h2 className='text'>
            Your personalized online recipe book.
</h2>
          <div className='start-buttons'>
            <button className='signup-button'>Start for free!</button>
            <Link to="/dashboard">
              <button className='guest-button'>Take a test drive</button>
            </Link>
          </div>
        </div>
        <div className='login-container'>
          <button className='login-button'>LOGIN</button>
        </div>
      </div>
    )
  }
}

export default Home


