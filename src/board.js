import React from "react"
import WinnerText from "./winnerText.js"
import Square from "./square.js"
import Buttons from "./buttons.js"
import Scores from "./scores.js"

export default class Board extends React.Component{
	constructor(props){
		super(props);
		this.checkRows = this.checkRows.bind(this);
		this.checkColumns = this.checkColumns.bind(this);
		this.checkCrossess = this.checkCrossess.bind(this);
		this.changeSquare = this.changeSquare.bind(this);
		this.playAgain = this.playAgain.bind(this);
		this.resetGame = this.resetGame.bind(this);
		this.checkWinner = this.checkWinner.bind(this);
		this.addScore = this.addScore.bind(this);
		this.state = {currentPlayer:"X",
			      squares:["","","","","","","","",""]
		};
		this.xScore = 0;
		this.oScore = 0;
		this.initialState = this.state;
		
	}

	addScore(player){
		switch(player){
			case "X":
				this.xScore += 1;
				break;
			case "O":
				this.oScore += 1;
				break;
			default:
				break;
		}
	}

	playAgain(e){
		this.setState({currentPlayer:"X",squares:["","","","","","","","",""]});
	}

	resetGame(e){
		this.xScore = 0;
		this.oScore = 0;
		this.setState(this.initialState);
	}

	changeSquare(index){

		this.setState((prevState) => {
				const currentPlayer = prevState.currentPlayer;
				const newSquares = prevState.squares.map((square,position) =>  {
					if (position === index){
						return currentPlayer;
					}else{
						return square;
					}
				});
				
				const newPlayer = currentPlayer === "X"  ? "O" : "X";
				
				return {
					currentPlayer:newPlayer,
					squares:newSquares
				};
		});
	}

	checkRows(){
		for(let i = 0;i<3;i++){
			const startIndex = i*3;
			if (this.state.squares[startIndex] === this.state.squares[startIndex+1] && this.state.squares[startIndex+1] === this.state.squares[startIndex+2] && this.state.squares[startIndex] !== ""){
				return this.state.squares[startIndex];
			}
		}
		return null;
	}

	checkColumns(){
		for(let j = 0;j<3;j++){
			if(this.state.squares[j] === this.state.squares[j+3] && this.state.squares[j+3] === this.state.squares[j+6] && this.state.squares[j] !== ""){
				return this.state.squares[j];
			}
		}
		return null;
	}

	checkCrossess(){
		for(let x = 1;x<=2;x++){
			if (this.state.squares[4] === this.state.squares[4-2*x] && this.state.squares[4] === this.state.squares[4+2*x] && this.state.squares[4]!== ""){
				return this.state.squares[4];
			}
		}
		return null;
	}

	checkWinner(){
		const wonRows = this.checkRows();
		const wonCollumns = this.checkColumns();
		const wonCrossess = this.checkCrossess();

		if(wonRows){
			return wonRows;
		}
		else if(wonCollumns){
			return wonCollumns;
		}
		else if(wonCrossess){
			return wonCrossess;
		}
		else if((this.countOfElement(this.state.squares, "X") + this.countOfElement(this.state.squares, "O")) === 9){
			return "No one";
		}

		return null;
	}

	countOfElement(array,element){
		return array.filter(elem => elem === element).length;
	}

	render(){
		const winner = this.checkWinner();
		const buttons = <Buttons clickHandler1 = {this.resetGame} text1 = "Reset Game" clickHandler2 = {this.playAgain} text2 = "Play Again" />;

		if (winner){

			this.addScore(winner);	
			console.log(this.xScore);
			const scores = <Scores  xScore = {this.xScore} oScore = {this.oScore} />;
			return [ scores,<WinnerText playerWon = {winner} />,buttons];
		}
		else{
			const squareComponents = this.state.squares.map((element,index) => 
				{	
					return <Square value={element} key = {index.toString()} index  = {index} changeHandler = {this.changeSquare} />;
			});

			const scores = <Scores  xScore = {this.xScore} oScore = {this.oScore} />;

			return [scores,<div className = "board" >
					{squareComponents}
				</div>,buttons];
		}

	}		
}
