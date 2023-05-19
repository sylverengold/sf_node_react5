//cmd: npm install -g npm
//cmd: npm init
//cmd: npm install -g serve
//recharge de page automatique
//cmd : npm i -S nodemon
//json : "start": "nodemon server.js"
//prod : "start" : "NODE_ENV=production nodemon server1.js"
//cmd: npm run start  
//cmd: npm install -g live-server
//live-server --port=8009
//
//


let http = require('http') // import objet http
let fs = require('fs')

let server = http.createServer() //instance
server.on('request',(request,response) => {
	fs.readFile('index.html',(err, data) => {
		  //if (err) throw err
		if (err){
			response.writeHead(404)
			response.end ('Ce fichier n\'existe pas')
		}
		else{		  	
			response.writeHead(200,{'content-type': 'text/html; charset=uft-8'})
			response.write (data)	
			response.end ()
		}

//	response.end ('Salut comment ça va?')
//console.log('Il y a une requete');
	})
})
server.listen(8009) //port du serveur



//