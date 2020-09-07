import sqlite3 from 'sqlite3'

export default async (req, res) => {
	let productos = req["body"]["productos"];
	let nombre = req["body"]["nombre"];
	let direccion = req["body"]["direccion"];
	let telefono = req["body"]["telefono"];
	let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE);
   var data = [];
   db.run("INSERT into ventas(nombre_comprador, direccion_comprador, telefono_comprador) VALUES ( ? , ? , ?)", [nombre, direccion, telefono], function(err, rows) {

		db.all("select id from ventas ORDER BY id DESC LIMIT 1", function(err, rows){
			console.log(err, rows);
	 	  let newID = rows[0]["id"];
	  		if(err === null || err === undefined){
	  			productos.map((producto, index) => {
	  			   db.run("INSERT into venta_producto(producto_id, venta_id, cantidad) VALUES ( ? , ? , ?)", [producto["id"], newID, producto["added"]], function(err2, rows2) {
	  				});
	  			   db.run("UPDATE producto set cantidad = ? where id = ?", [producto["cantidad"] - producto["added"], producto["id"]], function(err2, rows2) {
	  				});
	  			});
	  	   	res.json([true]);
	  		}
	  		else{
	  			res.json([false]);
	  		}
	   })


		db.close();
	});

};
