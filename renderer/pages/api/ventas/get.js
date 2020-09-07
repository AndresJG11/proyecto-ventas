import sqlite3 from 'sqlite3'

export default async (req, res) => {
	let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE);
	res.json([false]);
};
