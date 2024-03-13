const fs = require('fs');
const path = require('path');

const musicFilePath = path.join(__dirname, '../data/music.json');
const musicJson = require('../data/music.json');

let musicList = [];
let favorites = [];

// Função para carregar as músicas do arquivo JSON
function loadMusicList() {
    try {
        const jsonData = fs.readFileSync(musicFilePath, 'utf8');
        musicList = JSON.parse(jsonData);
    } catch (err) {
        console.error('Error reading music data file:', err);
        musicList = [];
    }
}

// Carregar a lista de músicas no início
loadMusicList();

const musicModel = {
    getAllMusic: () => {
        return musicList;
    },
    getMusicById: (id) => {
        return musicList.find(music => music.id == id);
    },
    getFavorites: () => {
        return favorites;
    },
    addFavorite: (id) => {
        const music = musicList.find(music => music.id == id);
        if (music) {
            if (!favorites.some(fav => fav.id == id)) {
                favorites.push(music);
                return true;
            }
        }
        return false;
    },
    removeFavorite: (id) => {
        const index = favorites.findIndex(fav => fav.id == id);
        if (index !== -1) {
            favorites.splice(index, 1);
            return true;
        }
        return false;
    },
    getNextMusic: (currentMusicId) => {
        const currentIndex = musicJson.findIndex(music => music.id == currentMusicId);
        if (currentIndex !== -1 && currentIndex < musicJson.length - 1) {
            return musicJson[currentIndex + 1];
        } else {
            return null;
        }
    },
    getPrevMusic: (currentMusicId) => {
        const currentIndex = musicJson.findIndex(music => music.id == currentMusicId);
        if (currentIndex > 0) {
            return musicJson[currentIndex - 1];
        } else {
            return null;
        }
    }
};

module.exports = musicModel;
