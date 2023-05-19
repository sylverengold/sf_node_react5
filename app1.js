function Welcome1 ({name,children}){
	return <div>
	<h1>Bonjour {name}</h1>
	<p>{children}</p>
	</div>
}




class Welcome2 extends React.Component{

//render est indispensable - envoie vers le dom
	render(){
				return <div>
			<h1>Bonjour {this.props.name}</h1>
			<p>{this.props.children}</p>
			</div>

	}
}

class Clock extends React.Component {

    constructor (props) {
        super(props)//important
        this.state = {date: new Date()}//state etat d'un composant
        this.timer = null
    }

    componentDidMount () {//montage d'un composant // ici toutes les secondes
        this.timer = window.setInterval(this.tick.bind(this), 1000)// ici blind rapelle this // pour ne pas le perdre
                    }

    componentwillUnmount () {// demontage du composant
        window.clearInterval(this.timer)
    }

    tick () { // fonction de mise à jour du composant 
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }

}

class Incrementer extends React.Component {

    constructor (props) {
        super(props)//important
        this.state = {n: props.start}// etat conservé malgré le montage et le demontage
        this.timer = null
    }

        componentDidMount () {//montage d'un composant // ici toutes les secondes
        window.setInterval(this.increment.bind(this), 500)// ici blind rapelle this // pour ne pas le perdre
                    }

    componentwillUnmount () {// demontage du composant
        window.clearInterval(this.timer)
    }

    increment () { // fonction de mise à jour du composant 
    	if(this.state.n == '20'){
    		this.state.n = 0
    	}
        this.setState((state,props) => ({n: this.state.n + props.step}))
    }


        render () {
        return <div> Incrementation : {this.state.n}</div>
    }

	}
	Incrementer.defaultProps = {
		start : -10,
		step : 1
	}// on definit des proprietes par defaut 



class IncrementerManual extends React.Component {

    constructor (props) {
        super(props)//important
        this.state = { n:1}
    		}

        increment (e) {
        	e.preventDefault()// annuler le comportement par defaut // issu d'une autre appli par exemple
        	this.setState((state,props) => ({n: this.state.n +1}))
            }

    componentwillUnmount () {// demontage du composant
    
    		}


    	render () {
    		return <div><button onClick={this.increment.bind(this)}>Incrementer</button> => Incrementation : {this.state.n}</div>
    		//evenement onclick
    		}

	}

	class IncrementerAction extends React.Component {

    constructor (props) {
        super(props)//important
        this.state = {n: 1, timer: null, step:1}// etat conservé malgré le montage et le demontage
    }

     componentDidMount () {//montage d'un composant // ici toutes les secondes
	this.play()
	}

    componentwillUnmount () {// demontage du composant
     this.pause()
    }

    play () {//montage d'un composant // ici toutes les secondes
        this.setState({
        	timer : window.setInterval(this.increment.bind(this), 200)
        			})
				}

    pause () {// demontage du composant
        window.clearInterval(this.state.timer)
        this.setState({timer:null})
    }

    increment () { // fonction de mise à jour du composant 
        this.setState((state,props) => ({n: this.state.n + this.state.step}))
    }

        zero () { // fonction de mise à jour du composant 
        this.setState((state,props) => ({n: this.state.n = 0}))
    }

            invers () { // fonction de mise à jour du composant 
        this.setState((state,props) => ({step: (this.state.step == 1) ? this.state.step = -1 : this.state.step = 1}))
    }

    // grace à un ternaire on teste la presence du timer -> pause ou play
        render () {
        return <div>
        <button onClick={this.zero.bind(this)}> Zero </button>
        <button onClick={this.invers.bind(this)}> Invers </button>
        <button onClick={this.state.timer ? this.pause.bind(this) : this.play.bind(this)}>Action</button>
         Incrementation : {this.state.n}
         
         </div>
    }

	}


ReactDOM.render(<Welcome1 name="Joe">Bonjour les amis <Clock/>
	<Incrementer start={10}/><Incrementer start={1}/><Incrementer step={2}/>
	<IncrementerManual/>
	<IncrementerAction/>
	</Welcome1>,document.querySelector('#app1'))