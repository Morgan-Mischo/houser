module.exports = {
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db'); 
        const { id } = req.params; 

        dbInstance.readHouses() 
        .then( houses => res.status(200).send( houses ))
        .catch ( err => {
            res.status(500).send({ errorMessage: 'Something went wrong' }); 
            console.log(err)
        })
    }
}