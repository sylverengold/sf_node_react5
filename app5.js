
const FormContext = React.createContext ({})// ({}) -> pas de contexte initial // Provider -> fournisseur de contexte

//{children} -> contenu des balises // ici la balise <form>
function FormWithContext({defautValue,onSubmit,children}){ 

	
	const [data, setData] = React.useState (defautValue)

	const change = React.useCallback(function (name, value) {
	 	setData ( d => ({...d, [name]:value}))
	 	//setData(d => Object.assign({[name]:value}))
	})

	const value = React.useMemo (function () {
		return {...data, change}
		//return Object.assign({}, data, {change:change})
	},[data, change])

	const handleSubmit = React.useCallback(function (e) {
		e.preventDefault()
		onSubmit(value)
	},[onSubmit, value])//dependances : la fonction réagit au changement de onSubmit ou de value

	console.log(change)
	return <FormContext.Provider value = {value} >
	<form onSubmit = {handleSubmit}>
	{children}
	</form>
	</FormContext.Provider>
}
// Name ici est une variable contenant le nom du champ (Nom ou prenom)
// - donc {data[name]} correspond a la valeur de la clé contenu dans la variable name
//data[name] || ''  -> si data[name] n'existe pas on renvoie ''
function FormField({name,children}){

	const data = React.useContext (FormContext)
	const handleChange = React.useCallback(function(e) {
		data.change(e.target.name, e.target.value)
	},[data.change])
	
	return <div className = "form-group">
	<label htmlFor = {name}>
	{children}
	</label>
	<input type = "text" name = {name} id = {name} className = "form-control" value = {data[name] || ''} onChange = {handleChange}/>
	</div>

}
function PrimaryButton({children}){
	return <button className = "btn btn-primary">{children}</button>
}


function App5(){

const handleSubmit = React.useCallback(function (value) {
	//console.log(value)
},[])//[] -> pas de dependance

// double accolade -> un objet {} en parametre de  la foncton a = {}
return <div className = "container">
<FormWithContext defautValue = {{name: 'Bill', firstname: 'Joe'}} onSubmit = {handleSubmit}>
<FormField name = "name" >Nom</FormField>
<FormField name = "firstname" >Prenom</FormField>
<PrimaryButton>Envoyer</PrimaryButton>
</FormWithContext>
</div>

}

ReactDOM.render(<App5/>,document.querySelector('#app5'))