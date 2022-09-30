const path = require('path')

const homeController = {
    index: (req, res) => {
        let portfolio = ['/images/cathedral.jpg', '/images/road.jpg', '/images/european.jpg', '/images/bridge.jpg']

        res.render('home', {
            title: 'Home Portfolio',
            portfolio
        })
    }
}

module.exports = homeController;