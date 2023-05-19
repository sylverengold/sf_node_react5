function Tabs ({children}) {
	
	const tabs = React.Children.toArray(children).map(tab => tab.props.title)//on peut lister entre autres les elements de l'enfant 
	const childrenArray = React.Children.toArray(children)
	const [current, setCurrent]  = React.useState(childrenArray[0].key) // on utilise useState pour stocker un element et son état
	const newChildren =  childrenArray.map(child => {//on ne peut pas modifier les children à la volée - on créé un nouveau tableau newChildren
		return React.cloneElement(child, {selected:child.key === current}) // selected = true si la condition child.key === current se vérifie
})
	console.log (tabs)
	//onClick (une fonction anonyme qui change la valeur de l'état de Current en utilisant setCurrent)
	//on met une clé key parce que c'est bien
	return <div>
	<nav>
		{childrenArray.map(child => <button onClick={() => setCurrent(child.key)} key={child.key}>{child.props.title}</button>)}
	</nav>
	<section>
	{newChildren}
	</section>
	</div>;
}

function Tab ({children, selected}) {
	return <div hidden={!selected}>{children}</div>;
}


function App6() {
	return <Tabs>
	 {/* tableau dynamique ajouté : [...new Array(2)].map((v,k) => (<Tab title={`Onglet n ${k}`} key ={k}>L'homme qui travaille perd un temps précieux.</Tab>))*/}
	<Tab title = "Miguel de Cervantès">L'homme qui travaille perd un temps précieux.</Tab>
	<Tab title = "Bob Marley">L'homme est un univers en lui-même.</Tab>
	<Tab title = "Victor Hugo">Le plus lourd fardeau, c'est d'exister sans vivre.</Tab>
	<Tab title = "Friedrich Nietzsche">La liberté c'est de savoir danser avec ses chaines.</Tab>
	<Tab title = "Pierre Desproges">Si l'union fait la force, la force n'a jamais fait l'intelligence.</Tab>
	</Tabs>
}


ReactDOM.render(<App6/>,document.querySelector('#app6'))