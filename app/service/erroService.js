const errorService = {

    errorNotFound(req, res){
        const errorMessage = 'La page est introuvable';
        res.status(400).json(errorMessage);
    },

    controlWrapper(mdw){
        return async (req, res, next) => {
            try {
                await mdw(req, res, next);
            } catch (error) {
                const errorMessage = 'Une erreur server est survenue, veuillez réessayer plus tard';
                res.status(500).json(errorMessage);
            }
        }
        }
}

module.exports = errorService;