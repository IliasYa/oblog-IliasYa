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
    }
}

module.exports = postDataMapper;