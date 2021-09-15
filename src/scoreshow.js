import React from "react"

export default class ScoreShow extends React.Component{
	constructor(props){
		super(props);
		this.forPlayer = this.props.forPlayer;
	}

	render(){
		this.value = this.props.value;
		return(
			<div className = "score" >
				{this.forPlayer + " : " + this.value}
			</div>
		);
	}
}
