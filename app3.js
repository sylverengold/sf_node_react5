
// technique des references permet de recuperer des données en contournant React 
//- pratique pour des champs non controlée par React 
//-pour recuperer des données dans les bibliotheques externes

class App3 extends React.Component{

	constructor (props) {
		super(props)//important
		this.handleTruc = this.handleTruc.bind(this) 
		this.state = {Machin:''}
		this.truc = React.createRef()
	}


	handleTruc(e){
		this.setState({machin:this.truc.current.value})
	}

	render(){
		return <div>
		<input type="text" ref={this.truc}/>
		<button onClick={this.handleTruc}> test </button>
		<input type="text" value={this.state.machin}/>
		</div>
	}

}

ReactDOM.render(<App3/>,document.querySelector('#app3'))