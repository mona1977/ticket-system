// DEVELOPER : SURENDRA
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import Web3 from 'web3';
import Festival from './components/Festivalticket';
import Purchase from './components/Purchaseticket';
import MyTickets from './components/MyTicketsfast';
import SecondaryMarket from './components/SecondaryMarketticket';

class App extends Component {

  constructor() {
    super();

    new Promise((resolve, reject) => {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        window.ethereum.enable()
          .then(() => {
            resolve(
              new Web3(window.ethereum)
            );
          })
          .catch(e => {
            reject(e);
          });
        return;
      }
      if (typeof window.web3 !== 'undefined') {
        return resolve(
          new Web3(window.web3.currentProvider)
        );
      }
      resolve(new Web3('http://127.0.0.1:8545'));
    });

    window.ethereum.on('accountsChanged', function () {
      window.location.reload();
    });
  }

  render() {
    return (
      <Router>

        <div >
          <ReactNotification />
          <nav style={{ padding: '0px 30px 0px 30px' }}>
            <div class="nav-wrapper" >
              <a href="/buyTickets" class="brand-logo left">TICKET CENTER</a>
              <ul class="right hide-on-med-and-down 10" >
                <div>
                  <li> <Link to="/createFestival">Add Event</Link> </li>
                  <li> <Link to="/buyTickets">Purchase Tickets</Link> </li>
                  <li> <Link to="/market"> OtherParty Market</Link> </li>
                  <li> <Link to="/tickets">Tickets Dashboard</Link> </li>
                  <li >
                  </li>
                </div>

              </ul>
            </div>
          </nav>

          <Switch>
            <Route path="/createFestival" component={Festivalticket} />
            <Route path="/buyTickets" component={Purchaseticket} />
            <Route path="/market" component={SecondaryMarketticket} />
            <Route path="/tickets" component={MyTicketsfast} />
          </Switch>
        </div>

      </Router >
    )
  }
}

export default App;