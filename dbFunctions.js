const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)






function getAllMyths(db = connection){
  return db('myths')
  .select()
}




function getMythByRegion(id, db = connection){
  return db('myths')
  .join ('regions', 'myths.region_id',  'regions.id')
  .select('*','myths.id as id')
  .where('myths.id', id)
}



function getOneMyth(id, db = connection){
  return db('myths')
  .where('id', id)
  .select()
  .first()
}





module.exports = {
  getAllMyths,
  getMythByRegion,
  getOneMyth
}