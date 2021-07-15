
const knex = require('knex'/*$path$*/);
const bookshelf = require('bookshelf'/*$path$*/);
const path = require('path'/*$path$*/);

let connection = {};

module.exports = class Database {
	
	
	// Configure database connection.
	// 
	// @returns {void}
	
	static make(){
		var φ3, φ, φ2;
		
		const location = path.join(process.cwd(),'bootstrap','cache','config.json');
		
		try {
			
			const config = require(location);
			
			const connectionName = config.database.default;
			
			const selectedConnection = config.database.connections[connectionName];
			
			const client = (selectedConnection.driver != null) ? selectedConnection.driver : 'mysql';
			
			return connection = {
				client: client,
				connection: {
					host: ((φ = selectedConnection.host) != null) ? (φ) : '127.0.0.1',
					port: ((φ2 = selectedConnection.port) != null) ? (φ2) : '3306',
					user: selectedConnection.username,
					password: selectedConnection.password,
					database: selectedConnection.database,
					charset: selectedConnection.charset
				}
			};
		} catch (e) { };
	}
	
	// Get knex instance.
	// 
	// @returns {knex}
	
	/**
	@param {string} name
	*/
	static table(name){
		
		this.make();
		
		return knex(connection)(name);
	}
	
	// Get bookshelf instance.
	// 
	/** @type {object}*/
	
	static get bookshelf(){
		
		this.make();
		
		return bookshelf(knex(connection));
	}
};
