import React from "react";

class BinsMain extends React.Component{
             render(){
             
            console.log(this.props.match.params.id);
    return(<div>
        hello from BinsMain
        </div>)
                
             }

}

export default BinsMain;