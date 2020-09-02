import * as SQLite from 'expo-sqlite';


class DataBaseHandler {
	constructor() {
		this.db = SQLite.openDatabase('dbName', "1");
	}
}
export default DataBaseHandler;
