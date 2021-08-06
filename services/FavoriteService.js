/* eslint-disable no-unused-vars */
const Service = require('./Service');

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
