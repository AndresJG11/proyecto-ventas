import { NextApiRequest, NextApiResponse } from 'next';
import open from 'sqlite';
import sqlite3 from 'sqlite3'

export default async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {

	let db = new sqlite3.Database("./mydb.sqlite", sqlite3.OPEN_READWRITE);
	var data = [];
	db.get("select * from vehicle", function(err, row){
		data = row;
		console.log(data);
      res.json(data);
	})
	//console.log("-----------", sqlite3, db);
    //const db = await sqlite.open('./mydb.sqlite');
    //const vehicle = await db.all('select * from vehicle');
}
