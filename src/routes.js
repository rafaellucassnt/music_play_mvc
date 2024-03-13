// routes.js

const express = require('express');
const router = express.Router();
const musicController = require('./controllers/musicController');

router.get('/', musicController.index);
router.get('/play/:id', musicController.play);
router.get('/favorites', musicController.favorites);
router.get('/addFavorite/:id', musicController.addFavorite);
router.get('/removeFavorite/:id', musicController.removeFavorite);
router.get('/next/:id', musicController.next); // Inclua o parâmetro 'id' na definição da rota
router.get('/prev/:id', musicController.prev); // Inclua o parâmetro 'id' na definição da rota

module.exports = router;
