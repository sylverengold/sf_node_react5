class Form0 extends React.Component {



    constructor (props) {
        super(props)//important
        this.state = { nom : '',prenom : '',surnom:'Joe',newsletter:false}
    	this.handleChange = this.handleChange.bind(this)// on rapelle que le this d'avant est egale au this d' encore avant 
        }

        handleChange(e){// attention c'est une methode appelée sans les () // 
        	const name = e.target.name // on recupere le nom du champ 'nom" ou 'prenom' puis on change sa valeur dans state
        	const type = e.target.type // 
        	const value = type === 'checkbox' ? e.target.checked : e.target.value
        	this.setState({
        		[name]: value
        	})
        }




	render (){
		return <div>
					<div>

						<div><label htmlFor="nom">Nom</label>
						<input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom"/></div>
						<div><label htmlFor="prenom">Prenom</label>
						<input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom"/></div>
						<div><label htmlFor="surnom">Surnom</label>
						<input type="text" defaultValue={this.state.surnom} onChange={this.handleChange} id="surnom" name="surnom"/></div>
						<div><label htmlFor="Newsletter">Newsletter</label>
						<input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange}  id="newsletter" name="newsletter"/></div>
					</div>
						{JSON.stringify(this.state)}
				</div>

	}
}


ReactDOM.render(<Form0/>,document.querySelector('#form0'))