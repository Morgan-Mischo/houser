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
    }, 

    addHouse: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, address, city, state, zipcode } = req.body
        dbInstance.addHouse([name, address, city, state, zipcode])
        .then( () => res.sendStatus(200))
        console.log('all good')
    }
}