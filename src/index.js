import React from "react"
import ReactDOM from  "react-dom"
import "./index.css"
import Board from "./board.js"

class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Board />);
	}
}

ReactDOM.render(
	<App />,document.getElementById("root"));

