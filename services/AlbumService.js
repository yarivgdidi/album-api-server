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
const listAlbums = ({ limit, offset, filter }) => new Promise(
  async (resolve, reject) => {
    try {
      const albums = filter?  await db.albums.find({title: new RegExp(filter)} ).skip(offset).limit(limit) : await db.albums.find({}).skip(offset).limit(limit);
      const total = filter? await db.albums.count({title: new RegExp(filter)}) : await db.albums.count();
      const favorites = await db.favorites.find({});
      const albumsWithFavorites = albums.map(album => {
          const favorite = favorites.find(favorite => album._id === favorite.albumId ) 
          return favorite ?  { ...album, favorite: favorite._id } : album
        
        })
     
        
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
const listFavoritesAlbums = ({ limit, offset, filter }) => new Promise( 
  async (resolve, reject) => {
    try {
      const albums = await db.albums.find({})
      const favorites = await db.favorites.find({});
      let albumsWithFavorites = favorites.map(favorite => ({ favorite: favorite._id, ...albums.find(album => album._id === favorite.albumId ) }))
      if (filter && filter != ''){
        albumsWithFavorites = albumsWithFavorites.filter(album => album.title.indexOf(filter)>= 0)
      }

      resolve(Service.successResponse({
        limit,
        offset,
        total:albumsWithFavorites.length,
        favoritesAlbums: limit && offset ? albumsWithFavorites.slice(offset, offset + limit) : albumsWithFavorites
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
