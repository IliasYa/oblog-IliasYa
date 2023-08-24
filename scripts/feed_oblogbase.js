const categoryData = require('../data/categories.json');
const postData = require('../data/posts.json');
const client = require('../app/model/dbclient');

async function importData(dataObject, tableName){
    let counter = 0;
    const sqlParameters = [];
    const sqlValues = [];
    const sqlColumn = [];
    
    for (const [key, value] of Object.entries(dataObject)) {
        
        if(key === "category"){
            switch (value) {
                case 'Angular':
                    sqlParameters.push(`($${counter+1})`);
                    sqlValues.push(2);
                    sqlColumn.push(`${key}_id`);
                    counter++;
                    break;
                case 'React':
                    sqlParameters.push(`($${counter+1})`);
                    sqlValues.push(3);
                    sqlColumn.push(`${key}_id`);
                    counter++;
                    break;
                case 'O’clock':
                    sqlParameters.push(`($${counter+1})`);
                    sqlValues.push(4);
                    sqlColumn.push(`${key}_id`);
                    counter++;
                    break;
                case 'Autre':
                    sqlParameters.push(`($${counter+1})`);
                    sqlValues.push(5);
                    sqlColumn.push(`${key}_id`);
                    counter++;
                    break;
                default:
                console.log(`Problem occured to linked category`);
            }
        }else{
            sqlParameters.push(`($${counter+1})`);
            sqlValues.push(value);
            sqlColumn.push(key);
            counter++;
        }
    }
    const queryColumn = `(${sqlColumn.join()})`
    const query = `INSERT INTO "${tableName}" ${queryColumn} VALUES (${sqlParameters.join()})`;
    await client.query(query, sqlValues);
    // console.log(sqlParameters);
    // console.log(sqlValues);
    // console.log(queryColumn);
};

(async ()=> {
    await client.query('TRUNCATE category CASCADE');
    await client.query('TRUNCATE post CASCADE');
    
    for(const objectData of categoryData){
        await importData(objectData, "category");
    }
    for(const objectData of postData){
        await importData(objectData, "post");
    }
})()

console.log("Process completed,the import is finished");