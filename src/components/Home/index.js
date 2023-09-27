// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  onLogin = () => {
    console.log('login clicked')
    this.setState(() => ({isLogin: true}))
  }

  onLogout = () => {
    console.log('logout clicked')
    this.setState(() => ({isLogin: false}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="bg-container">
        <div className="color-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout onClick={this.onLogout} />
          ) : (
            <Login onClick={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
