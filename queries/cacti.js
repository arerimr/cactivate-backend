const db = require('../db/dbConfig')

const getCacti = async () => {
    try {
        const cacti = await db.any("SELECT * FROM cacti")
        return cacti;
    } catch (e) {
        return e
    }
}

const getCactus = async (id) => {
    try {
        const cactus = await db.one("SELECT * FROM cacti WHERE id=$1", id)
        return cactus;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getCacti,
    getCactus
}