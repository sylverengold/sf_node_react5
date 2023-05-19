class Home extends React.Component {

	constructor (props) {
		super(props)//important
		this.state = { nom : 'Jean', comm: 'rien', taille : 'Normal', pair: false }
		this.handleChangeNom = this.handleChangeNom.bind(this)// on rapelle que le this d'avant est egale au this d' encore avant 
		this.handleChangeTaille = this.handleChangeTaille.bind(this)
		this.handleChangeComm = this.handleChangeComm.bind(this)
		this.handleChangePair = this.handleChangePair.bind(this)
	}



	handleChangeNom(e){// attention c'est une methode appelée sans les () // 
	////e est l'evenement et e.target.value la valeur du champ
	// on remplacer la valeur par la valeur saisie
	//console.log(e)
		this.setState({nom:e.target.value})
	}

		handleChangeTaille(e){// attention c'est une methode appelée sans les () // 
	////e est l'evenement et e.target.value la valeur du champ
	// on remplacer la valeur par la valeur saisie
	//console.log(e)
		this.setState({taille:e.target.value})
	}

		handleChangeComm(e){// attention c'est une methode appelée sans les () // 
	////e est l'evenement et e.target.value la valeur du champ
	// on remplacer la valeur par la valeur saisie
	//console.log(e)
		this.setState({comm:e.target.value})
	}

		handleChangePair(e){// attention c'est une methode appelée sans les () // 
	////e est l'evenement et e.target.value la valeur du champ
	// on remplacer la valeur par la valeur saisie
	//console.log(e)
		this.setState({pair:e.target.checked})
	}

//<p><label> {this.state.nom} - {this.state.comm} - {this.state.taille} - {this.state.pair}</label></p>
	render (){//toujours fermer les balises -> <aa><aa/> ou auto fermnante <aa/>

	return <div>
	{JSON.stringify(this.state)}
	<div>
	
	<p><label htmlFor="nom">Mon nom</label></p>
	<input type="texte" id="nom" name="nom" value={this.state.nom} 
	onChange ={this.handleChangeNom}/>
	</div>
	<div>
	<p><label htmlFor="comm">Commentaire</label></p>
	<textarea  type="texte" id="com" name="com" value={this.state.comm} 
	onChange ={this.handleChangeComm}></textarea>
	</div>
	<div>
	<p><label htmlFor="taille">Taille</label></p>
	<select value={this.state.taille} onChange ={this.handleChangeTaille}  id="taille" name="taille">
	<option value="Petit">Petit</option>
	<option value="Gros">Gros</option>
	<option value="Balaise">Balaise</option>
	</select>
	</div>
	<div>
	<p><label htmlFor="pair">Pair?</label></p>
	<input type="checkbox" checked={this.state.checked} id="pair" name="pair" onChange={this.handleChangePair}/>
	</div>	
	<div>
	{this.state.checked ? <p>Coucou</p>:null}
	</div>
	</div>
	}
}


ReactDOM.render(<Home/>,document.querySelector('#app2'))