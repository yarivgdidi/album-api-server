/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
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
* List all albums with user access
*
* limit Integer maximum number of results to return (optional)
* offset Integer offset from beginning of list (for pagination) (optional)
* returns List
* */
const listAlbums = ({ limit, offset }) => new Promise(
  
  async (resolve, reject) => {
    try {
      const albums = [
        {"userId":4,"id":32,"title":"reiciendis dolores a ut qui debitis non quo labore","_id":"0zU8clZ4WTLcNEv1"},
        {"userId":6,"id":54,"title":"aut non illo amet perferendis","_id":"1EFDgTOQeRqx80if"},
        {"userId":9,"id":85,"title":"qui voluptatem consequatur aut ab quis temporibus praesentium","_id":"1fgKN0a9Gjr8N5Mi"},
        {"userId":3,"id":29,"title":"inventore ut quasi magnam itaque est fugit","_id":"1hKksYPH1A6FG4QY"},
        {"userId":1,"id":10,"title":"distinctio laborum qui","_id":"2PoOyVA0Dqxx25ja"},
        {"userId":5,"id":44,"title":"sapiente cum numquam officia consequatur vel natus quos suscipit","_id":"2WdA3wZwBzogiwcE"},
        {"userId":10,"id":91,"title":"repellendus praesentium debitis officiis","_id":"3465EUTHf4pEUfFZ"},
        {"userId":5,"id":42,"title":"tenetur explicabo ea","_id":"3rlCNbUyS7uiOvTU"},
      ];
      resolve(Service.successResponse({
        limit,
        offset,
        albums
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
* Updates a album in the store with form data
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
  deleteAlbum,
  findAlbumById,
  listAlbums,
  updatePetWithForm,
};
