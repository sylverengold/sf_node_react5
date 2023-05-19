const PRODUCTS = [{category: "Espagne", price: "12.45€", stocked:true, name: "Chorizo"},
{category: "Espagne", price: "9.85€", stocked:false, name: "Morcilla"},
{category: "Allemagne", price: "12.30€", stocked:false, name: "Kassler"},
{category: "France", price: "5.90€", stocked:true, name: "Fromage de Tête"},
{category: "Italie", price: "14.90€", stocked:true, name: "Coppa"},
{category: "Italie", price: "8.80€", stocked:false, name: "Mortadella"},
{category: "France", price: "8.30€", stocked:true, name: "Andouillette"},
{category: "Espagne", price: "5.40€", stocked:true, name: "Lomo"},
{category: "Italie", price: "13.20€", stocked:false, name: "Zampone"},
{category: "Allemagne", price: "17.35€", stocked:true, name: "Blutwurst"},
{category: "Allemagne", price: "17.35€", stocked:true, name: "Flurgönder"},
{category: "France", price: "15.30€", stocked:false, name: "Saucisse de Morteau"},
{category: "Italie", price: "10.00€", stocked:true, name: "Pancetta"}
];



function ProductRow ({product}){
	const name = product.stocked ? product.name : <span className = "text-danger">{product.name}</span>
	return <tr>
		<td>{name}</td>
		<td>{product.price}</td>
	</tr>
} 

function ProductCategoryRow ({category}){
	return <tr>
		<th colSpan="2">{category}</th>
	</tr>
} 


function ProductTable ({products, inStockOnly, filterText}){


	products = [...products, {category: "Italie", price: "9.95€", stocked:false, name: "Biroldo"} ]
	products = [{category: "France", price: "13.05€", stocked:true, name: "Diot"},...products  ]

	products.sort(function compare(a, b) {
		if (a.category < b.category)
			return -1;
		if (a.category > b.category )
			return 1;
		return 0;
	});

	const rows = []
	let  lastCategory = null

	products.forEach(product => {
		if (inStockOnly && !product.stocked){//on teste si la case est cochée et si le produit est en stock 
			return//on saute une ligne
		}
		if (product.name.indexOf(filterText) === -1){// on teste si el nom contient le texte 
			return
		}
		if (product.category != lastCategory){
			lastCategory = product.category
			rows.push(<ProductCategoryRow key= {lastCategory} category = {product.category}/>)
		}
		rows.push(<ProductRow key= {product.name} product = {product}/>)
	})

	return <table className="table">
		<thead>
			<tr>
				<th>Nom</th>
				<th>Prix</th>
			</tr>
		</thead>
		<tbody>
			{rows}
		</tbody>
	</table>
}


class FilterableProductTable extends React.Component{

	constructor (props) {
		super(props)//important
		this.state = {filterText : '', inStockOnly : false	}
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
		this.handleInStockChange = this.handleInStockChange.bind(this)
	}

	handleFilterTextChange(filterText){
		this.setState({filterText})
	}

	handleInStockChange(inStockOnly){
		this.setState({inStockOnly})
	}

	render(){
		const {products} = this.props
				//{JSON.stringify(this.state)}//a mettre dans le return pour l'état des états dans l'état
		return <React.Fragment>
			
			<SerchBar
				filterText={this.state.filterText} //les données descendent
				inStockOnly={this.state.inStockOnly} 
				onFilterTextChange = {this.handleFilterTextChange}// les donnees remontent
				onStockChange = {this.handleInStockChange}
			/>
			<ProductTable products = {products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
		</React.Fragment>
	}
}

class SerchBar  extends React.Component{

	constructor (props) {
		super(props)//important
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
		this.handleInStockChange = this.handleInStockChange.bind(this)
	}

	handleFilterTextChange(e){
		this.props.onFilterTextChange(e.target.value)
	}

	handleInStockChange(e){
		this.props.onStockChange(e.target.checked)
	}

	render(){
		const {filterText, inStockOnly} = this.props

		return <div clasNamev= "mb-3">
			<div className = "form-group mb-0">
				<input type="text" value={filterText} className="form-control" placeholder="rechercher" 
				onChange={this.handleFilterTextChange}/>
			</div>
			<div className = "form-check">
				<input type="checkbox" checked ={inStockOnly} className="form-check-input" id="stock" 
				onChange={this.handleInStockChange}/>
				<label htmlFor="stock" className="form-check-label">Produits en stock</label>
			</div>
		</div>

	}
}


ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,document.querySelector('#prod'))