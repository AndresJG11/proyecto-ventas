import sqlite3 from 'sqlite3'

export default async (req, res) => {
	let nombre = req["body"]["nombre"];
	let cantidad = req["body"]["cantidad"];
	let codigo = req["body"]["codigo"];
	let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE);
   var data = [];
	console.log(nombre, cantidad, codigo);
   db.run("INSERT into producto(nombre, cantidad, barras) VALUES ( ? , ? , ?)", [nombre, cantidad, codigo], function(err, rows) {
		if(err === null || err === undefined){
	   	res.json([true]);
		}
		else{
			res.json([false]);
		}
	});

};
