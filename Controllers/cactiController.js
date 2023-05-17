const express = require('express');
const cacti = express.Router()
const { getCacti, getCactus } = require('../queries/cacti');

cacti.get('/', async (req, res) => {
    const allCacti = await getCacti();
    allCacti ? res.status(200).json(allCacti) : res.status(500).json({ error: 'server error' })
});

cacti.get('/:id', async (req, res) => {
    const { id } = req.params
    const cactus = await getCactus(id)
    cactus ? res.status(200).json(cactus) : res.status(500).json({ error: 'server error' })
})

module.exports = cacti;