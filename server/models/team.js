var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema(
    {
      fifa: {type: String, required: true},
      name: {type: String, required: true},
      league: {type: String, required: true},
      attack: { type: Number, min: 0, max: 100, required: true },
      defense: { type: Number, min: 0, max: 100, required: true },
      midfield: { type: Number, min: 0, max: 100, required: true },
      overall: { type: Number, min: 0, max: 100, required: true },
      rating: { type: Number, min: 0, max: 100, required: true },
    }
);

module.exports = mongoose.model('Team', TeamSchema);