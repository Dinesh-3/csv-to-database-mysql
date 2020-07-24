var bookshelf = require('./../config/db').bookshelf;

var User = bookshelf.Model.extend({
	tableName: 'data'
});

module.exports = {
	User: User
};
