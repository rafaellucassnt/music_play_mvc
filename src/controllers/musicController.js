const musicModel = require('../models/musicModel');

const musicController = {
    index: (req, res) => {
        const allMusic = musicModel.getAllMusic();
        res.render('index', { musicList: allMusic });
    },
    play: (req, res) => {
        const musicId = req.params.id;
        const music = musicModel.getMusicById(musicId);
        const prevMusic = musicModel.getPrevMusic(musicId);
        const nextMusic = musicModel.getNextMusic(musicId);
        if (music) {
            res.render('play', { music, prevMusic, nextMusic });
        } else {
            res.status(404).send("Música não encontrada");
        }
    },

    favorites: (req, res) => {
        const favoriteMusic = musicModel.getFavorites();
        res.render('favorites', { favorites: favoriteMusic });
    },
    addFavorite: (req, res) => {
        const musicId = req.params.id;
        const success = musicModel.addFavorite(musicId);
        if (success) {
            res.redirect('/');
        } else {
            res.status(404).send("Música não encontrada");
        }
    },
    next: (req, res) => {
        const currentMusicId = req.params.id;
        const nextMusic = musicModel.getNextMusic(currentMusicId);
        if (nextMusic) {
            res.redirect(`/play/${nextMusic.id}`);
        } else {
            res.status(404).send("Nenhuma próxima música disponível");
        }
    },

    prev: (req, res) => {
        const currentMusicId = req.params.id;
        const prevMusic = musicModel.getPrevMusic(currentMusicId);
        if (prevMusic) {
            res.redirect(`/play/${prevMusic.id}`);
        } else {
            res.status(404).send("Nenhuma música anterior disponível");
        }
    },
    removeFavorite: (req, res) => {
        const musicId = req.params.id;
        const success = musicModel.removeFavorite(musicId);
        if (success) {
            res.redirect('/favorites');
        } else {
            res.status(404).send("Música não encontrada nos favoritos");
        }
    }
};
module.exports = musicController;
