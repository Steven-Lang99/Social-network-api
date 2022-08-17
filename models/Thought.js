const { Schema, model, SchemaTypes, Types } = require('mongoose')


const reactionSchema = new Schema({
    reactionId: {
        type: SchemaTypes.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
});

const Thought = model('Thought', thoughtSchema)

// Thought.deleteMany({}).then(() => console.log('Thought deleted'));

module.exports = Thought