import sqlite3 from 'sqlite3'

export default async (req, res) => {
	let idProduct = req["body"]["id"];
	let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE);
   var data = [];
   db.run("UPDATE producto set eliminado=1 where id = ? ", [idProduct], function(err, rows) {
	console.log(err, rows);

		db.close();
		if(err === null || err === undefined){
	   	res.json([true]);
		}
		else{
			res.json([false]);
		}
	});

};
