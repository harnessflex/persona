
const pluralize = require('pluralize'/*$path$*/);
const Database = require('./Database'/*$path$*/);

module.exports = class Model extends Database.bookshelf.Model {
	
	
	// The table associated with the model.
	// 
	/** @type {string}*/
	
	get tableName(){
		
		return pluralize(this.constructor.name).replace(/([A-Z])/g,'_$1').trim().toLowerCase().replace(/^\_+/,'');
	}
	
	// Get the route key for the model.
	// 
	// @returns {string}
	
	static getRouteKeyName(){
		
		return 'id';
	}
	
	// Retrieve a model by its primary key
	// 
	/** @param   {number}  primaryKey*/
	// @returns {Object|null}
	
	/**
	@param {number} primaryKey
	*/
	static async find(primaryKey){
		
		try {
			
			return await new this({id: primaryKey}).fetch();
		} catch (φ) {
			
			return null;
		};
	}
};
