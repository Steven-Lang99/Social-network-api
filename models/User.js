const { Schema, model, SchemaTypes } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Wrong Email']
    },
    thoughts: [{
        type: SchemaTypes.ObjectId,
        ref: 'Thought'
    }],

    friends: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }]
});

const User = model('User', userSchema)

// User.deleteMany({}).then(() => console.log('user deleted'));

module.exports = User;