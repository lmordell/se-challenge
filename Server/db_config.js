const Sequelize = require('sequelize')

const db = new Sequelize('postgres://lwqdmmsk:I_BlQDSJnLyKOeCZFJbKF_1QoyG0kKxp@elmer.db.elephantsql.com:5432/lwqdmmsk')


const Files = db.define('files', {
	date: {
		type: Sequelize.DATE(),
		notNull: true
	},
	category: {
		type: Sequelize.STRING(60),
		notNull: true
	},
	employee_name: {
		type: Sequelize.STRING(60),
		notNull: false
	},
	employee_address: {
		type: Sequelize.STRING(60),
		notNull: false
	},
	expense_description: {
		type: Sequelize.STRING(60),
		notNull: true
	},
	pre_tax_amount: {
		type: Sequelize.FLOAT(),
		notNull: true
	},
	tax_name: {
		type: Sequelize.STRING(20),
		notNull: true
	},
	tax_amount: {
		type: Sequelize.FLOAT(),
		notNull: true
	},
} ,
	{
		timestamps: false
	}
)


Files.sync({ force: true })

db.authenticate()
    .then(function(err) {
        console.log('Successful Connection to the database');
    })
    .catch(function(err) {
        console.log('+++line 10 config.database.js: cannot connect to the database ', err);
    });

module.exports = Files;