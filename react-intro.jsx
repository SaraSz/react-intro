/*[1] Den första delen av sidan ska innehålla ett textfält. Medan användaren skriver i det ska värdet skrivas ut under textfältet i en React-komponent som innehåller texten*/

class PartOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			write: ""
		}
		this.userInput = this.userInput.bind(this);
		
	}
	userInput(event) {
		this.setState({
			write: event.target.value
		})
	}
	
	render() {
		return (
		  <div>
			<Input handleKeyUp={this.userInput} res={this.state.write} />
		  </div>
		);
	}
}

function Input(props) {
	return <div>
        <h2>#1</h2>
    	<input type="text" placeholder="Write something" onKeyUp={props.handleKeyUp} /> <br/>
        <p>What you write will show here: <br/> <span>{props.res}</span></p>
    </div>;
}

ReactDOM.render(
  <PartOne></PartOne>,
  document.getElementById("first")
)
  
   
/*[2] Den andra delen av sidan ska innehålla två textfält. När användaren skriver in tal i textfälten ska deras summa skrivas ut bredvid. Textfälten och resultatet ska ingå i en React-komponent.*/


      

/*[3] Den tredje delen av sidan ska ha en komponent med två knappar. När användaren klickar på dem ska komponentens state ändras. Om man klickar på den första knappen ska "Första knappen" skrivas ut på sidan och den första knappen ska byta CSS-klass, för att visa att den är aktiv. Om man klickar på den andra knappen ska på samma sätt "Andra knappen" skrivas ut.*/

class App extends React.Component {
  constructor(props) {
    super(props);   
      
      this.state = {
          value: ""   
      };
      
this.activeFirst = this.activeFirst.bind(this);
this.activeSecond = this.activeSecond.bind(this);
  }
      
  activeFirst(event){
      this.setState({value: this.state.value = "You pressed the first button"})
  }

  activeSecond(event){
      this.setState({value: this.state.value = "You pressed the second button"})
  }
      
render(){
    return(
            <div>
                <h2>#3</h2>
                <button id="one" onClick={this.activeFirst}>First button</button>&nbsp;
                <button id="two" onClick={this.activeSecond}>Second button</button>
                <br/><br/>
                <span>What did you do? {this.state.value}</span>
            </div> 
        )
    }
}


ReactDOM.render(
  <App></App>,
  document.getElementById("third")
);


