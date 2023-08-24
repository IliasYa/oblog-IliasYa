const oblogSchema = require('./oblogSchema');

const validationService = {
    checkForm(req, res, next){
        const {value, error} = oblogSchema.validate(req.body);
        if(!error){
            next() 
        }
        else{
            res.json(error.details[0].message);
        }
    }
}


module.exports = validationService