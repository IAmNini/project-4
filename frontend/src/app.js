import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavbarDrawer from './Common/NavbarDrawer'
import Register from './User/Register'
import Login from './User/Login'
import ChatRoom from './Common/ChatRoom'

const App = () => {
  return <BrowserRouter>
    <NavbarDrawer />
    <Switch>
      <Route path={'/register'} component={Register} />
      <Route path={'/login'} component={Login} />
      {/* <Route path={'/myprofile'} component={MyProfile} />
      <Route path={'/mychats'} component={MyChats} /> */}
      <Route path={'/chatroom'} component={ChatRoom} />
    </Switch>
  </BrowserRouter>
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)