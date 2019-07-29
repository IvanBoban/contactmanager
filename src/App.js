import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Component/Contacts/Contacts';
import Header from './Component/Layout/Header';
import { Provider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddContact from './Component/Contacts/AddContact'
import EditContact from './Component/Contacts/EditContact';
import About from './Component/pages/About'
import NotFound from './Component/pages/NotFound';
import test from './Component/test/test';
export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={proccess.env.PUBLIC_URL}>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path='/test' component={test} />
                <Route component={NotFound} />
              </Switch>
            </div>

          </div>
        </Router>

      </Provider>
    )
  }
}
