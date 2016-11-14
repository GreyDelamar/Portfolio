var knex = require('./knex');

function Jobs() {
    return knex('job');
}

module.exports = {
  addcontact: function(firstname, lastname, company, email, message){
    return Jobs().insert({
           'firstname': firstname,
           'lastname': lastname,
           'company': company,
           'email': email,
           'message': message
    })
  }
}
