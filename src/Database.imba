const knex = require 'knex'
const bookshelf = require 'bookshelf'
const path = require 'path'

let connection = {}

module.exports = class Database

	# Configure database connection.
	#
	# @returns {void}

	static def make
		const location = path.join process.cwd!, 'bootstrap', 'cache', 'config.json'

		try
			const config = require location

			const connectionName = config['database']['default']

			const selectedConnection = config['database']['connections'][connectionName]

			const client = selectedConnection['driver'] ?? 'mysql'

			connection = {
				client: client
				connection: {
					host: selectedConnection.host ?? '127.0.0.1'
					port: selectedConnection.port ?? '3306'
					user: selectedConnection.username
					password: selectedConnection.password
					database: selectedConnection.database
					charset: selectedConnection.charset
				}
			}

	# Get knex instance.
	#
	# @returns {knex}

	static def table name\string
		self.make!

		knex(connection)(name)

	# Get bookshelf instance.
	#
	# @type {object}

	static get bookshelf
		self.make!

		bookshelf knex connection
