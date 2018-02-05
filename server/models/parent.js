const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChildrenSchema = require('./children');

const ParentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name for the parent']
  },
  description: {
    type: String
  },
  strictnessLevel: Number,
  children: [ChildrenSchema],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
});

const Parent = mongoose.model('parent', ParentSchema);

module.exports = Parent;
