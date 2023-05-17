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

const updateCactus = async (id, cactus) => {
    const { name, image, scientific_name, origin, life_expectancy, flowers, max_height, fun_fact, care_instructions, edible } = cactus

    try {
        const updatedCactus = await db.one("UPDATE cacti SET name=$1, image=$2, scientific_name=$3, origin=$4, life_expectancy=$5, flowers=$6, max_height=$7, fun_fact=$8, care_instructions=$9, edible=$10 WHERE id=$11 RETURNING *", [name, image, scientific_name, origin, life_expectancy, flowers, max_height, fun_fact, care_instructions, edible, id])
        return updatedCactus;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getCacti,
    getCactus,
    updateCactus
}