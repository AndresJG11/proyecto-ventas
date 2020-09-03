import { NextApiRequest, NextApiResponse } from 'next';
import open from 'sqlite';
import sqlite3 from 'sqlite3'

export default async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
	let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE);
	var data = [];
	db.all("select * from producto", function(err, rows){
		data = rows;
		if(rows === undefined){
			res.json([]);
		}
		else{
	      res.json(data);
		}
	})
}
