import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Bin } from "../../../imports/collections/bin";
import {Link } from "react-router-dom";


class BinsList extends React.Component{

    onBinRemove(bin) {
        Meteor.call("bins.remove", bin)
    }
    renderlist () {


        return this.props.bins.map( bin => {
            const url=`/bin/${bin._id}`;
            return (
                <li className="list-group-item" 
                key= {bin._id}>
               <Link to={url}> Bins : {bin._id}</Link>
                <span className="pull-right">
                <button className="btn btn-danger"
                onClick= {() => {this.onBinRemove(bin)}}>
                Remove
                 </button>
                 </span>
                </li>
            )
        })
    }

    render() {
        
          return ( 
             <ul className="list-group">
             {this.renderlist()}
             </ul> 
       )
    }
}

export default withTracker(()=> {
    Meteor.subscribe('bins');
    return { bins: Bin.find({}).fetch()};

}) (BinsList);