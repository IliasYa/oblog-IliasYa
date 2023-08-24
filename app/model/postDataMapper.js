const client = require('./dbclient');

const postDataMapper = {
    async getAllPosts(){
        const sqlQuery = `SELECT post.id, category.label as category, post.slug, post.title, post.excerpt, post.content
                        FROM "post", "category"
                        WHERE "post"."category_id"="category"."id"`;
        const result = await client.query(sqlQuery);
        return result.rows;
    },

    async getOnePost(id){
        const sqlQuery = `SELECT post.id, category.label as category, post.slug, post.title, post.excerpt, post.content
                        FROM "post", "category"
                        WHERE "post"."id"=$1 AND "post"."category_id"="category"."id"`;
        const sqlValue = [id];
        const result = await client.query(sqlQuery, sqlValue)
        return result.rows;
    },
    
    async getPostsByCategory(id){
        const sqlQuery = `SELECT post.id, category.label as category, post.slug, post.title, post.excerpt, post.content
                        FROM "post", "category"
                        WHERE "post"."category_id"=$1 AND "post"."category_id"="category"."id"`
        const sqlValue = [id];
        const response = await client.query(sqlQuery, sqlValue);
        return response.rows;
    },

    async insertNewPost(newPost){
        // ATTENTION : pour l'ajout, la valeur retourner par le formulaire concernant la category du post devra correspondre à l'id (clé primaire) de cette catégorie et non le label de la category!!!
        let counter = 0;
        const sqlValues = [];
        const sqlParameters = [];
        const sqlColumn = [];
        for (const [key, value] of Object.entries(newPost)) {
            sqlValues.push(value);
            sqlColumn.push(key);
            sqlParameters.push(`($${counter+1})`)
            counter++;
        }
        const sqlQuery = `INSERT INTO "post"(${sqlColumn.join()})
                        VALUES (${sqlParameters.join()})`;
        const response = await client.query(sqlQuery, sqlValues)
        return response.rowCount;
    },
}

module.exports = postDataMapper;

