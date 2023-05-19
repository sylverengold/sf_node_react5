const theme = {
	dark: {
		background : '#000',
		color : '#fff'
	},
	light: {
		background : '#fff',
		color : '#000'
	},
	vert: {
		background : '#7a2d25',
		color : '#74ff5c'
	}
}

const ThemeContext = React.createContext(theme.vert)

function App41({theme}){
//useState est un hook qui créé un objet contenant un élement 
	//et une fonction callback pour modifier cet élement 
const [count, setCount] =  React.useState(0) //on créé un état count initialisé avec 0 // un nombre
const [name, setName] =  React.useState('Joe') //on créé un état count initialisé avec 0 // un nombre
const handleClick1 = function (e){
	e.preventDefault()///annule le comportement par defaut
	setCount(c => c +1)
	setName( name => {return (name =="Joe")?"Bill":"Joe"})
}
const handleClick2 = function (e){
	e.preventDefault()///annule le comportement par defaut
	setCount(c => c +2)
}



		return <div>
		<button style={theme}  onClick ={handleClick1}>Nombre : {count}</button>
		<button style={theme} onClick ={handleClick1}>Nom : {name}</button>
		<button style={theme} onClick ={handleClick2}>Nombre : {count}</button>
		</div>

}

function reducer(state, action) {
	state = state + (action.incr || 0)
  switch (action.type) {
    case 'Plus':
      return state + 1;
    case 'Moins':
      return state- 1;
    default:
      throw new Error();
  }
}

function App44(){
	const value = React.useContext(ThemeContext)
//useState est un hook qui créé un objet contenant un élement 
	//et une fonction callback pour modifier cet élement 
const [count, dispatch] =  React.useReducer(reducer,0) // on met la foncion reducer en premier parametre
// permet un traitement logique plus complexe



		return <div>
		<button style={value} onClick ={() => dispatch ({type : 'Plus', incr : 10})}>Plus 10 : {count}</button>
		<button onClick ={() => dispatch ({type : 'Moins'})}>Moins : {count}</button>
		<button onClick ={() => dispatch ({type : 'Plus'})}>Plus : {count}</button>
		<button onClick ={() => dispatch ({type : 'Moins', incr : -5})}>Moins 5 : {count}</button>
		</div>

}

function App42(){
//useState est un hook qui créé un objet contenant un élement 
	//et une fonction callback pour modifier cet élement 
const [name, setName] =  React.useState('Joe')
const [adjectif, setAdjectif] =  React.useState('Le Naze')

const handleChangeTitle1 = function (e){
	e.preventDefault()///annule le comportement par defaut
	setName(name => {return (e.target.value != '')?e.target.value:"Joe"})// on recupere le nom dans le select
}

const handleChangeTitle2 = function (e){
	e.preventDefault()///annule le comportement par defaut
	setAdjectif(adjectif => e.target.value)// on recupere le nom dans le select
}

//React.userLayoutEffect(()=>)// methode synchrone // attend le chargement du process // action sur le dom
//React.userEffect(()=>)// // methode asynchrone // agir sans attendre la fin du process // traitement moins visuel 
React.useEffect(() => {document.title = "Page de " + name+" "+adjectif},[name,adjectif])//on change le nom de la page

React.useEffect(() => {
	const timer = window.setInterval(() =>{
		setName(name => "Joe")
	},10000)})//on change le nom au bout de 10 secondes / utilisable pour nettoyer des champs ou autres ou recuperer des données d'une API




		return <div>
	<select value={name} onChange ={handleChangeTitle1}  id="name" name="name">
	<option value="Joe">Joe</option>
	<option value="Harry">Harry</option>
	<option value="Bill">Bill</option>
	<option value="Jacky">Jacky</option>
	</select>
		<select value={adjectif} onChange ={handleChangeTitle2}  id="adjectif" name="adjectif">
	<option value="Le Naze">Le Naze</option>
	<option value="Le Bouffon">Le Bouffon</option>
	<option value="Le Pignouf">Le Pignouf</option>
	<option value="La Brêle">La Brêle</option>
	<option value="Le Débile">Le Débile</option>
	</select>
		</div>

}

function App43(){

	const [todos, setTodos] =  React.useState([])// etat initialisé en tableau vide
	const [loading, setLoading] =  React.useState(true)
	//exemple d'appel Ajax
React.useEffect(() => {
	(async function(){
	const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
	const responseData = await response.json()
		if (response.ok) {
		setTodos(responseData)
		} else {
			alert(JSON.stringify(responseData))
		}
		setLoading(false)
	})()

},[])

if(loading){ return 'Chargement'}

return <ul>
{todos.map(t => <li>{t.title}</li>)}
</ul>

}

ReactDOM.render(<div><App42/><App41 theme={theme.dark}/><App44/><App43/></div>,document.querySelector('#app4'))