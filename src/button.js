import React from "react"

export default class Button extends React.Component{
	constructor(props){
		super(props);
		this.clickHandler = this.props.clickHandler;
		this.classname = this.props.className;
		this.text = this.props.text;
	}
	
	render(){

		return(
			<div className = {this.classname}  onClick = {this.clickHandler}>{this.text}</div>
		);
	}
}
