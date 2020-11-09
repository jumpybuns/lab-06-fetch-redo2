import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://safe-beyond-79072.herokuapp.com/';

export async function fetchSongs() {
    try {
        const response = await request.get(`${URL}shielas`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchSong(someId) {
    try {
        const response = await request.get(`${URL}shielas/${someId}`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchCategories() {
    try {
        const response = await request.get(`${URL}category`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createSong(newShiela) {
    try {
        await request
        .post(`${URL}shielas/`)
        .send(newShiela);
        return;
    } catch(err) {
        throw err;
    }
}

export async function updateSong(someId, newShiela) {
    try {
        await request
        .put(`${URL}shielas/${someId}`)
        .send(newShiela)
        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteSong(someId) {
    try {
        await request
        .delete(`${URL}shielas/${someId}`)
        return; 
   }    catch(err) {
       throw err;
   }
}