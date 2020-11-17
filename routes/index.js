var express = require('express');
var router = express.Router();
let db = require('../db/models')
let createCodVale = require('../middlewares/createCodVale')

/* GET home page. */
router.get('/',createCodVale, async function (req, res, next) {
let vale =  db.Codigo.findOne({
    order: [['id','DESC']]
})

let articulo = db.Articulo.findAll()

let usuario = db.Legajo.findAll()

Promise.all([vale, articulo, usuario])
.then(function([vale, articulo, usuario]){
 
    res.render('index', {vale:vale, articulo:articulo, usuario:usuario } );
})
.catch(err => console.log(err))
  
});

router.post('/', async function(req, res, next){
    await db.Vale.create({
        vale: req.body.vale,
        usuario: req.body.legajo,
        cantidad: req.body.cantidad,
        articulo_id: req.body.articulo
    })

 res.send('vale cargado')
})

module.exports = router;
