module.exports = {
    async get(req, res) {
        res.render('createAccessory', {title: 'Create Accessory'})
    },
    async post(req, res) {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: Number(req.body.price),
        }

        try {
            await req.accessory.createAccessory(accessory)
            res.redirect('/')
        } catch(err) {
            console.log(err);
            res.redirect('/accessory')
        }
    }
}
