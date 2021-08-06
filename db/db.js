const util = require('util')
// const Datastore = require('nedb')
const Datastore = require('nedb-promises')

const albums = new Datastore({ filename: 'db/albums.db', autoload: true });
const favorites = new Datastore({ filename: 'db/favorites.db', autoload: true });

// albums.findAsync=util.promisify(albums.find);
// favorites.findAsync=util.promisify(favorites.find);

module.exports = {
    albums,
    favorites
} 