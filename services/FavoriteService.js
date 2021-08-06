/* eslint-disable no-unused-vars */
const Service = require('./Service');
const db = require('../db');

/**
* Creates a new Album in the store
*
* newFavorite NewFavorite Add Favorite album
* returns Favorite
* */
const addFavorite = ({ newFavorite }) => new Promise(
  async (resolve, reject) => {
    const favorite = await db.favorites.insert(newFavorite);
    favorite.id = favorite._id
    try {
      resolve(Service.successResponse({
        favorite,
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
      const numRemoved = await db.favorites.remove({_id:id})
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

module.exports = {
  addFavorite,
  deleteFavorite,
  listFavorites,
};
