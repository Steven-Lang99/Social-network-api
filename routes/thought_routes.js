const api_router = require('express').Router();
const User = require('../models/User')
const Thought = require('../models/Thought')


//GET all thoughts
api_router.get('/thoughts', async (req, res) => {
    const thoughts = await Thought.find()

    res.send(thoughts)

})

//GET thought by id
api_router.get('/thoughts/:id', async (req, res) => {
    const thoughts = await Thought.findOne({ _id: req.params.id })
    res.send(thoughts)
})
//POST creat new thought
api_router.post('/thoughts', async (req, res) => {
    const { user_id } = req.body
    const users = await User.findOne({ _id: user_id })
    const thoughts = await Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
    });

    users.thoughts.push(thoughts._id)
    users.save()

    res.send(users)

})
//PUT update user by id
api_router.put('/thoughts/:id', async (req, res) => {
    const thoughts = await Thought.findOneAndUpdate({ _id: req.params.id })

    res.send(thoughts)
})

//DELETE thought by id
api_router.delete('/thoughts/:id', async (req, res) => {
    const thoughts = await Thought.findOne({ _id: req.params.id })

    res.send(thoughts)
})

//Add a reaction to thought
api_router.post('/thoughts/:thoughtId/reactions', async (req, res) => {

})

//remove reaction
api_router.delete('/thoughts/:thoughtId/reactions', async (req, res) => {

})
module.exports = api_router