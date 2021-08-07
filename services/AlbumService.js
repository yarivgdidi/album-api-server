/* eslint-disable no-unused-vars */
const Service = require('./Service');
const db = require('../db');

/**
* Create album
* Creates a new Album in the store
*
* newAlbum NewAlbum Albums to add to the store
* returns Album
* */
const addAlbum = ({ newAlbum }) => new Promise( 
  async (resolve, reject) => {
    const album = await db.albums.insert(newAlbum)
    try {
      resolve(Service.successResponse({
        album,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete an album
* deletes a single album based on the ID supplied
*
* id Long ID of pet to delete
* no response value expected for this operation
* */
const deleteAlbum = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      const numRemoved = await db.albums.remove({_id:id})
      resolve(Service.successResponse({
        _id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get album by ID
* Returns an album based on a single ID,
*
* id Long ID of pet to fetch
* returns Album
* */
const findAlbumById = ({ id }) => new Promise(
  async (resolve, reject) => {
    const album = await db.albums.findOne({_id:id})
    try {
      resolve(Service.successResponse({
        id,
        album
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List albums
* List all albums with user access
*
* limit Integer maximum number of results to return (optional)
* offset Integer offset from beginning of list (for pagination) (optional)
* returns List
* */
const listAlbums = ({ limit, offset }) => new Promise(
  async (resolve, reject) => {
    try {
      const albums = await db.albums.find({}).skip(offset).limit(limit);
      const favorites = await db.favorites.find({});
      const albumsWithFavorites = albums.map(album => ({ ...album, favorites: favorites.find(favorite => album._id === favorite.albumId ) }))
      const total = await db.albums.count();
        
      resolve(Service.successResponse({
        limit,
        offset,
        total,
        albums:albumsWithFavorites,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  }, 
);
/**
* List favorites albums
* List all albums with user access
*
* limit Integer maximum number of results to return (optional)
* offset Integer offset from beginning of list (for pagination) (optional)
* returns List
* */
const listFavoritesAlbums = ({ limit, offset }) => new Promise( 
  async (resolve, reject) => {
    try {
      const albums = await db.albums.find({})
      const favorites = await db.favorites.find({});
      const albumsWithFavorites = favorites.map(favorite => ({ favorite: favorite._id, ...albums.find(album => album._id === favorite.albumId ) }))
      resolve(Service.successResponse({
        limit,
        offset,
        albums: limit && offset ? albumsWithFavorites.slice(offset, offset + limit) : albumsWithFavorites
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update album
* Updates album by ID 
*
* id Long ID of album that needs to be updated
* album Album Albums to add to the store
* no response value expected for this operation
* */
const updateAlbum = ({ id, album }) => new Promise(
  async (resolve, reject) => {
    try {
      const newAlbum = await db.albums.update({_id: id}, album)
      resolve(Service.successResponse({
        id,
        newAlbum
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addAlbum,
  deleteAlbum,
  findAlbumById,
  listAlbums,
  listFavoritesAlbums,
  updateAlbum,
};
