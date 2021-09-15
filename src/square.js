import React from  "react"

export default class Square extends React.Component{
	constructor(props){
		super(props);
		this.index = this.props.index;
		this.onClickHandler = this.onClickHandler.bind(this);

		
	}

	onClickHandler(e){

		this.used = this.props.value === "" ? false : true;
		if (!this.used){
			this.props.changeHandler(this.index);
		}
	}

	render(){
		this.value = this.props.value;
		return(<div onClick = {this.onClickHandler} className = "square">
			<p>{this.value} </p>
		</div>);
	}
}


