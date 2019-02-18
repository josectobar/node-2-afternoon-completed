module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then((response) => {
            res.status(200).send(response)
        }).catch(err => req.status(500).send('Error, there was a problem processing your request.'))
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.read_product(id).then(response => {
            res.status(200).send(response)
        }).catch(err => req.status(500).send('Error, there was a problem processing your request.'))
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { name, description, price, image_url } = req.body
        db.update_product(id, name, description, price, image_url).then(response => {
            res.status(200).send('Update completed')
        }).catch(err => req.status(500).send('Error, there was a problem processing your request.'))
    },
    create: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body
        db.create_product(name, description, +price, image_url).then(response => {
            res.status(200).send('Product was added successfully')
        }).catch(err => req.status(500).send('Error, there was a problem processing your request.'))
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_product(id).then(response => {
            res.status(200).send('entry was successfully deleted')
        }).catch(err => req.status(500).send('Error, there was a problem processing your request.'))
    }
}