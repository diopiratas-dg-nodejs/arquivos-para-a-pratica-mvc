const path = require('path')

const aboutController = {
    index: (req, res) => {
        res.render('about', {
            title: 'Sobre Portfolio'
        })
    }
}

module.exports = aboutController;