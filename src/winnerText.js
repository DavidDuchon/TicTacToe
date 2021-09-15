import React from  "react"

export default class WinnerText extends React.Component{

	constructor(props){
		super(props);
		this.playerWon = this.props.playerWon;
		this.text = this.playerWon + " won";
	}

	render(){
		return (
			<p className = "winnerText">{this.text} </p>);
	}
}


