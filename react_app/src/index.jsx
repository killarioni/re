import React from "react";
import  ReactDOM  from "react-dom/client";
 
class App extends React.Component{
    constructor(){
        super()

        this.state = {
            name : "",
            age : "",
            lastname : "",

        }
    }

    setValue (){
        this.setState({
            name : "john",
        }); 

        window.alert(this.state.name);
    }

    render(){
        return (
            <React.Fragment>
                <button type= "button" onClick={() => this.setValue()}>click here</button>
            </React.Fragment>
        )
    }
}
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);