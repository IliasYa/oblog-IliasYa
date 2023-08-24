const client = require('./dbclient');

const categoryDataMapper = {
    async getAllCategories(){
        const sqlQuery = `SELECT route, label FROM category`;
        const response = await client.query(sqlQuery);
        return response.rows;
    },
}

module.exports = categoryDataMapper;