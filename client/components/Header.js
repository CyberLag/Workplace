import React from "react";
import Accounts from "./accounts";
import { Link} from "react-router-dom";

import createHistory from 'history/createBrowserHistory';
 
const history = createHistory()

class Header extends  React.Component {
onBinClick(event) {
    event.preventDefault();
    Meteor.call("bins.insert", (error, binId)=> {
    history.push(binId);
    });
}


    render() {
     return (
         <nav className ="nav navbar-default">
        <div className="navbar-header">
        <Link to="/"  className="navbar-brand"> CyberBin </Link>
        </div>
        <ul className="nav navbar-nav">
        <li> <a> <Accounts /> </a> </li>
        <li> <a href="#" onClick={this.onBinClick.bind(this)}> Create Bin </a></li>
        </ul>

            </nav>
     );
}
}

export default Header;