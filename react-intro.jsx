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
        <h2>Part 1</h2>
    	<input type="text" placeholder="Write something" onKeyUp={props.handleKeyUp} />
        <p>What you write will show here: <span>{props.res}</span></p>
    </div>;
}

ReactDOM.render(
  <PartOne></PartOne>,
  document.getElementById("first")
)
  
   
/*[2] Den andra delen av sidan ska innehålla två textfält. När användaren skriver in tal i textfälten ska deras summa skrivas ut bredvid. Textfälten och resultatet ska ingå i en React-komponent.*/

class PartTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      res: 0
    };
    this.numberInput1Change = this.numberInput1Change.bind(this);
    this.numberInput2Change = this.numberInput2Change.bind(this);
  }
  
  numberInput1Change(event) {
    const first = Number(event.target.value);
    this.setState({
      number1: first,
      res: first + this.state.number2
    })
  }
  numberInput2Change(event) {
    const second = Number(event.target.value);
    this.setState({
      number2: second,
      res: second + this.state.number1
    })
  }
  
  render() {
    return (
      <div>
        <NumberInput handleNumberInput1Change={this.numberInput1Change} handleNumberInput2Change={this.numberInput2Change} />
        <Sum res={this.state.res} />
      </div>
    )
  }
}

class NumberInput extends React.Component {
  render() {
    return (
      <div id="numberDiv">
        <h2>Part 2</h2>
        <input type="text" placeholder="First number" onChange={this.props.handleNumberInput1Change} />
        <p>+</p>
        <input type="text" placeholder="Second number" onChange={this.props.handleNumberInput2Change} />
        <p>=</p>
      </div>
    )
  }
}

class Sum extends React.Component {
  render() {
    return (
      <p>{this.props.res}</p>
    )
  }
}

ReactDOM.render(
  <PartTwo></PartTwo>,
  document.getElementById("second")
)

      

/*[3] Den tredje delen av sidan ska ha en komponent med två knappar. När användaren klickar på dem ska komponentens state ändras. Om man klickar på den första knappen ska "Första knappen" skrivas ut på sidan och den första knappen ska byta CSS-klass, för att visa att den är aktiv. Om man klickar på den andra knappen ska på samma sätt "Andra knappen" skrivas ut.*/

class PartThree extends React.Component {
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
                <h2>Part 3</h2>
                <button id="one" onClick={this.activeFirst}>First button</button>&nbsp;
                <button id="two" onClick={this.activeSecond}>Second button</button>
                <br/><br/>
                <span>What did you do? {this.state.value}</span>
                <br/><br/>
            </div> 
        )
    }
}


ReactDOM.render(
  <PartThree></PartThree>,
  document.getElementById("third")
);


