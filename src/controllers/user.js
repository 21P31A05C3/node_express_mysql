const Sequelize     = require('sequelize');
const user       = require('../../models').user;

// Methods executed when using a REST API route
module.exports = {
    // Method for creating a user that runs on a POST-type REST API.
    create(req, res) {
       return user
           .create ({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone
           })
           .then(user => res.status(200).send(user))
           .catch(error => res.status(400).send(error))
    },
    // Method for modifying a user that runs on a PUT-type REST API.
    async update(req, res) {
        const { id } = req.params;
        const { name, last_name, email, phone } = req.body;
        const [affectedRows] = await user.update (
            {
                name,
                last_name,
                email,
                phone
            },
            {
                where: { id }
            }
        )
        if (affectedRows == 0) {
            res.status(404).json({ message: 'User not found or no changes made' });
        } 

        const updatedUser = await user.findByPk(id); // Fetch the updated record
        res.status(200).json(updatedUser);
    },
    // Method for deleting a user that runs on a DELETE-type REST API.
    async delete(req, res) {
        const { id } = req.params;

        const affectedRows = await user.destroy (
            {
                where: { id }
            }
        )
        if (affectedRows == 0) {            
            res.status(404).json({ message: 'User not found or no changes made' });
        } 
        res.status(200).send({ message: 'Item deleted successfully' });
    },
    // Method for listing one or more users that runs on a GET-type REST API.
    list(req, res) {
        const data = req.body || {};
        
        return user.findAll({
            where: data,
            order: [
                ['name', 'ASC']
            ]
        })
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
    },
};