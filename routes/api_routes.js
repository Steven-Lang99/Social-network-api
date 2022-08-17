const api_router = require('express').Router();
const User = require('../models/User');


//GET a user
api_router.get('/users', async (req, res) => {
    const users = await User.find()
    // console.log(users)
    res.send(users);

});

//GET user by id, populate thought and friend
api_router.get('/users/:id', async (req, res) => {
    const users = await User.findOne({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends')
    res.send(users)
})
//POST creat new user
api_router.post('/users', async (req, res) => {
    const users = await User.create(req.body);

    res.send(users)

})
//PUT update user by id
api_router.put('/users/:id', async (req, res) => {
    const users = await User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            username: req.body.username,
            email: req.body.email
        }, { new: true })


    res.send(users)
})

//delete user by id
api_router.delete('/users/:id', async (req, res) => {
    const users = await User.findOneAndDelete({
        _id: req.params.id
    })

    res.send(users)
})


//Add new friend
api_router.post('/users/:userId/friends/:friendId', async (req, res) => {
    const users = await User.findOne({ _id: req.params.id })

    res.send(users)
})

//remove friend
api_router.delete('/users/:userId/friends/:friendId', async (req, res) => {
    const users = await User.findOne({ _id: req.body.id })

    res.send(users)
})

module.exports = api_router