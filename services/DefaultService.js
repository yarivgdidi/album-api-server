/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create album
* Creates a new Album in the store
*
* newAlbum NewAlbum Albums to add to the store
* returns Album
* */
const addAlbum = ({ newAlbum }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        newAlbum,
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
* Creates a new Album in the store
*
* newFavorite NewFavorite Add Favorite album
* returns Favorite
* */
const addFavorite = ({ newFavorite }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        newFavorite,
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
      resolve(Service.successResponse({
        id,
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
* deletes a favorite based on the ID supplied
*
* id Long ID of pet to delete
* no response value expected for this operation
* */
const deleteFavorite = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
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
    try {
      resolve(Service.successResponse({
        id,
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
      resolve(Service.successResponse({
        limit,
        offset,
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
* List all favorites relations
*
* returns List
* */
const listFavorites = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
const updatePetWithForm = ({ id, album }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
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

module.exports = {
  addAlbum,
  addFavorite,
  deleteAlbum,
  deleteFavorite,
  findAlbumById,
  listAlbums,
  listFavorites,
  updatePetWithForm,
};
