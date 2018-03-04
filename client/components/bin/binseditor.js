import React from "react";
import CodeMirror from "react-codemirror";
import 'codemirror/lib/codemirror.css';  
import 'codemirror/theme/monokai.css';  
import 'codemirror/mode/javascript/javascript.js'
import "codemirror/mode/markdown/markdown";


export default class BinsEditor extends React.Component{
    Change(content) {
          console.log(content);       
    }        
    
    render(){
             
    return(<div className="col-xs-8">
      <h5> Input </h5>
      <CodeMirror 
      onChange={this.Change.bind(this)}
      options={{mode:"markdown", lineNumbers:true}}/>
        </div>)
                
             }

}