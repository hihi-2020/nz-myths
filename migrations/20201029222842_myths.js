exports.up = (knex, Promise) => {
    return knex.schema.createTable('myths', (table) => {
      table.increments('id').primary()
      table.integer('region_id')
      table.string('title')
      table.string('content', 5000)
      table.string('imageLink', 5000)

    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('myths')
  }
