var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function () {
  console.log('Polaczono z mongodb')
})
module.exports = mongoose
