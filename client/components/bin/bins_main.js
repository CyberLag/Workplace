import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Bin } from "../../../imports/collections/bin";
import BinsEditor from "./binseditor";

class BinsMain extends React.Component{
             render(){
             //console.log(this.props.bins);
            //console.log(this.props.match.params.id);
    return(<div>
         <BinsEditor bin= {this.props.bin}/>
        </div>)
                
             }

}

export default withTracker((props)=> {
    const {id} = props.match.params;
    Meteor.subscribe('bins');
    return { bins: Bin.findOne(id)};

}) (BinsMain);