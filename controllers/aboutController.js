const path = require('path')

const aboutController = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'))
    }
}

module.exports = aboutController;