// Require Mongoose 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100
  },
  image: {
    type: String
  },
  bio: {
    type: String
  },
  userRecipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  favRecipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
    //one more component thats a form add favorite, sent user and recipe id
  }]
})

// Use bcrypt to hash password
userSchema.pre('save', function (next) {
  if (this.isNew) {
    // New, as opposed to modified
    this.password = bcrypt.hashSync(this.password, 12)
  }

  next()
})

// Ensure that password doesn't get sent with the rest of the data
userSchema.set('toJSON', {
  transform: (doc, user) => {
    delete user.password
    delete user.__v
    return user
  }
})

// Create a helper function to compare the password hashes
userSchema.methods.isAuthenticated = function (typedPassword) {
  return bcrypt.compareSync(typedPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)


