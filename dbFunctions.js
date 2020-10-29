const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllMyths(db = connection){
  return db('myths').select()
}

function getMythByRegion(id, db = connection){
  return db('myths').where('region_id', id).select()
}

function getOneMyth(id, db = connection){
  return db('myths').select().where('id', id).first()
}



module.exports = {
  getAllMyths,
  getMythByRegion,
  getOneMyth
}