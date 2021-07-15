const pluralize = require 'pluralize'
const Database = require './Database'

module.exports = class Model < Database.bookshelf.Model

	# The table associated with the model.
	#
	# @type {string}

	get tableName
		pluralize(this.constructor.name).replace(/([A-Z])/g, '_$1')
			.trim()
			.toLowerCase()
			.replace(/^\_+/, '')

	# Get the route key for the model.
	#
	# @returns {string}

	static def getRouteKeyName
		'id'

	# Retrieve a model by its primary key
	#
	# @param   {number}  primaryKey
	# @returns {Object|null}

	static def find primaryKey\number
		try
			await new self({ id: primaryKey }).fetch!
		catch
			null
