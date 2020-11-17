let express = require('express')
let router = express.Router()
let db = require('../db/models')

router.get ('/',  function(req,res){
    db.Articulo.findAll()
    .then( articulos => {
        res.json(articulos)
    }) 
})

module.exports = router