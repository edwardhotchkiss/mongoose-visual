
/**
 * @model Item
 **/

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var ItemSchema = new Schema({
  id         : { 'type' : ObjectId },
  name       : { 'type' : String },
  count      : { 'type' : Number, 'default' : 0 },
  created_at : { 'type' : Date, 'default' : Date.now }
});

var Item = exports.Item = mongoose.model('Item', ItemSchema);

/* EOF */