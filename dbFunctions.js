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
  .where('region_id', id)
}

function getOneMyth(id, db = connection){
  return db('myths')
  .where('id', id)
  .select()
  .first()
}

function addMyth(myth, db = connection){

  return db('myths')
  .insert(myth)
}

module.exports = {
  getAllMyths,
  getMythByRegion,
  getOneMyth,
  addMyth
}