const express = require('express');
const cacti = express.Router()
const { getCacti } = require('../queries/cacti');

cacti.get('/', async (req, res) => {
    const allCacti = await getCacti();
    allCacti ? res.status(200).json(allCacti) : res.status(500).json({ error: 'server error' })
})