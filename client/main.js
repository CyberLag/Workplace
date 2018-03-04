import React from "react";
import ReactROM from "react-dom";
import App from "./components/app";

import Header from "./components/Header";


import { Bin} from "../imports/collections/bin";
import {BrowserRouter, Route, Switch, Link } 
from "react-router-dom";

import BinsList  from "../client/components/bin/bins_list";
import BinsMain from "../client/components/bin/bins_main";

const NotFound=() => (<div>404- Hittades ej 
    <Link to="/">Tillbaka</Link> </div>);
const Routes = (
<BrowserRouter>
<div>
  <Header/> 
<Switch>
<Route path="/" component= {App} exact={true}/>
<Route path="/binsmain/:id" component= {BinsMain} />
<Route  component= {NotFound}/>
    </Switch>
    </div>
</BrowserRouter>
)


    

Meteor.startup(()=> ReactROM.render(Routes , document.querySelector(".root")));