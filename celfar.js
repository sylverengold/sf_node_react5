const scaleNames ={
	c : 'Celsius',
	f : 'Fahrenheit'
}

function BoilingVerdict({celsius}){
	if(celsius >= 100){
		return <div className="alert alert-success">L'eau bout !!</div>
	}
	return <div className="alert alert-info">L'eau ne bout pas!!</div>
}

function toCelsius (Fahrenheit){
	return (Fahrenheit-32)* 5/9
}

function toFahrenheit (Celsius){
	return (Celsius * 9/5) + 32
}

function tryConvert (temperature, convert){
	const value = parseFloat(temperature)
	if(Number.isNaN (value)){
		return '';
	}
	return (Math.round ( convert(value) * 100)/100).toString() //arrondi a deux chiffres
}


class TemperatureInput extends React.Component {

	constructor (props) {
		super(props)//important
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){// attention c'est une methode appelée sans les () //   
		this.props.onTemperatureChange(e.target.value)
	}

	render(){
		const {temperature} = this.props
		const name = 'scale' + this.props.scale
		const scaleName = scaleNames[this.props.scale]

		return <div className="form-group">
		<label htmlFor={name}>Température ({scaleName})</label>
		<input type="text" id={name}  name={name} value={temperature} className="form-control" onChange={this.handleChange}/>
		</div>
	}
}

class Calculator extends React.Component {

	constructor (props) {
		super(props)//important
		this.state = { scale:'c',temperature : 20}
		this.handleCelsuisChange = this.handleCelsuisChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
	}

	handleCelsuisChange (temperature){
		this.setState({scale: 'c', temperature}) //on change la valeur dans l'état de temperature dans Calculator
	}

	handleFahrenheitChange (temperature){
		this.setState({scale: 'f', temperature}) //on change la valeur dans l'état de temperature dans Calculator
	}

	render(){
		const {temperature, scale} = this.state
		const Celsius = scale === 'c' ? temperature : tryConvert(temperature,toCelsius)
		const Fahrenheit = scale === 'f' ? temperature : tryConvert(temperature,toFahrenheit)

		return <div>
		<TemperatureInput scale='c' temperature={Celsius} onTemperatureChange={this.handleCelsuisChange}/>
		<TemperatureInput scale='f' temperature={Fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
		<BoilingVerdict celsius={parseFloat(Celsius)}/>
		</div>
	}
}

ReactDOM.render(<Calculator/>,document.querySelector('#celfar'))