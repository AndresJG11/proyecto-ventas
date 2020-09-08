import sqlite3 from 'sqlite3'

export default async (req, res) => {
	let username = req["body"]["username"];
	let pass = req["body"]["pass"];
	let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE);
   var data = [];
	db.all("select * from user where username = ? and password = ? ", [username, pass], function(err, rows){
		data = rows;
		console.log(err, rows);
  		db.close();
 	  if(rows === undefined || rows.length === 0){
 		  res.json([false]);
 	  }
 	  else{
 		  res.json(data);
 	  }
   })

};
