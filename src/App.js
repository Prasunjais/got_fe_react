import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Containers/Home';
import history from './history';
import { storeLocationList } from './Actions/battle';
import ScrollToTop from './ScrollToTop';
import { Button } from 'antd';
import message from 'antd/lib/message';

//Utils
import './Resources/css/style.css';
import './Resources/css/responsive.css';
import 'antd/dist/antd.css';

//Scroll the page to top on route changeapplication.applicationdetails
const handlePageChange = () => {
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
}

class App extends Component {

  // constructor 
  constructor(props) {
    super(props);
    this.state = {
      "_id": "",
      "name": "",
      "summer": true,
      "year": 0,
      "location": "",
      "region": "",
      "note": "",
      "battleNumber": 0,
      "attackerKing": "",
      "defenderKing": "",
      "attackerOutcome": "",
      "battleType": "",
      "majorDeath": 0,
      "majorCapture": 0,
      "attackerSize": 0,
      "defenderSize": 0,
      "attackerCommander": "",
      "defenderCommander": "",
      "attackers": [],
      "defenders": []
    }
  }


  componentDidMount = () => {
    console.log('render');
    // this.isUserAuthorized();
  }

  render() {
    return (
      <div className="container-fluid">
        {/* <div className="row" style={{overflowX:'hidden'}}> */}
        <div className="row">
          <Router history={history} >
            <ScrollToTop>
              <Switch>
                <Route path="/" exact component={HomePage} onEnter={handlePageChange} />
                <Redirect from='*' to='/404' />
              </Switch>
            </ScrollToTop>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { battle: state.battle }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    storeLocationList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


