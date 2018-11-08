const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestion,
  addCard
}

function getQuestions (db = connection) {
  return db('questions').select()
}

function addCard (questions, answers, db = connection) {
  return db('cards').insert({questions, answers})
}
