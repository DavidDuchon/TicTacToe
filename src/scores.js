import React from "react"
import ScoreShow from "./scoreshow.js"

export default class Scores extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		this.xScore = this.props.xScore;
		this.oScore = this.props.oScore;
		return (
			<div className = "scores" >
				<ScoreShow forPlayer = "X" value = {this.xScore} />
				
				<ScoreShow forPlayer = "O" value = {this.oScore} />
			</div>
		);
	}
}
