import React from "react"
import Button from "./button.js"

export default class Buttons extends React.Component{
	constructor(props){
		super(props);
		this.clickHandler1 = this.props.clickHandler1;
		this.clickHandler2 = this.props.clickHandler2;
		this.text1 = this.props.text1;
		this.text2 = this.props.text2;
		this.classname = "button";

	}

	render(){
		return <div className = "buttons">
			<Button clickHandler = {this.clickHandler1} text = {this.text1} className = {this.classname}/> , <Button clickHandler = {this.clickHandler2} text = {this.text2} className = {this.classname}/>
			</div>;
	}
}
