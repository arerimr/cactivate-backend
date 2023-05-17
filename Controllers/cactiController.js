const express = require('express');
const cacti = express.Router()
const { getCacti, getCactus, updateCactus, createCactus, destroyCactus } = require('../queries/cacti');

cacti.get('/', async (req, res) => {
    const allCacti = await getCacti();
    allCacti ? res.status(200).json(allCacti) : res.status(500).json({ error: 'server error' })
});

cacti.get('/:id', async (req, res) => {
    const { id } = req.params
    const cactus = await getCactus(id)
    cactus ? res.status(200).json(cactus) : res.status(500).json({ error: 'server error' })
});

cacti.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    const updatedCactus = await updateCactus(id, body)
    updatedCactus ? res.status(200).json(updatedCactus) : res.status(500).json({ error: 'server error' })
});

cacti.post('/', async (req, res) => {
    const newCactus = req.body
    const createdCactus = await createCactus(newCactus)
    createdCactus ? res.status(200).json(createdCactus) : res.status(500).json({ error: 'server error' })
});

cacti.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedCactus = await destroyCactus(id)
    deletedCactus ? res.status(200).json(deletedCactus) : res.status(500).json({ error: 'server error' })
});

module.exports = cacti;