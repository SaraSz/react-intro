/*[1] Den första delen av sidan ska innehålla ett textfält. Medan användaren skriver i det ska värdet skrivas ut under textfältet i en React-komponent som innehåller texten*/
   
class ChangeText extends React.Component {
  render() {
  let x; 
  return (<p>{this.props.change} {x}</p>);
  }
}

let write = document.getElementById("write");

function textChanged(event) {
  ReactDOM.render(
    <ChangeText change={write.value} />,
    document.getElementById("show")
  )
}
write.addEventListener('keyup', textChanged);
    
/*[2] Den andra delen av sidan ska innehålla två textfält. När användaren skriver in tal i textfälten ska deras summa skrivas ut bredvid. Textfälten och resultatet ska ingå i en React-komponent.*/

class Sum extends React.Component{
    render() {
        let y = Number(number1.value) + Number(number2.value);
        
    return (<div>{y}</div>)
    }
}

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

function addition(event){
    ReactDOM.render(
    <Sum summa={number1 + number2} />,
        document.getElementById("resultDiv")
        )
    resultDiv.value = "";
}

number1.addEventListener("keyup", addition);
number2.addEventListener("keyup", addition);

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
  document.getElementById("root")
);


