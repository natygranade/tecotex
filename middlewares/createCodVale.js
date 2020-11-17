let db = require('../db/models')

module.exports =  async function (req,res,next){
   
   await db.Codigo.create()

        next()
    }
  



