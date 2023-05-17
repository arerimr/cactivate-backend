const db = require('../db/dbConfig')

const getCacti = async () => {
    try {
        const cacti = await db.any("SELECT * FROM cacti")
        return cacti;
    } catch (e) {
        return e
    }
}

module.exports = {
    getCacti,
}