exports.up = knex =>
  knex.schema.createTable('cards', t => {
    t.increments().primary()
    t.string('questions')
    t.string('answers')
  })

exports.down = knex =>
  knex.schema.dropTable('cards')
